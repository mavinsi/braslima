from pathlib import Path
import subprocess
import os

# Usa a pasta atual onde você está rodando o script
PASTA = Path.cwd()

# Config para website
CRF = 30
PRESET = "medium"
MAX_WIDTH = 1280

# Se True, substitui mesmo se o arquivo comprimido ficar maior.
# Recomendo deixar False.
FORCE_REPLACE = False


def tamanho_mb(bytes_size):
    return bytes_size / (1024 * 1024)


def comprimir_video(entrada: Path):
    temp = entrada.with_name(f"{entrada.stem}__compress_tmp{entrada.suffix}")

    if temp.exists():
        temp.unlink()

    comando = [
        "ffmpeg",
        "-y",
        "-i", str(entrada),

        # Pega vídeo e áudio se existir
        "-map", "0:v:0",
        "-map", "0:a?",

        # Vídeo para web
        "-c:v", "libx264",
        "-crf", str(CRF),
        "-preset", PRESET,
        "-pix_fmt", "yuv420p",

        # Reduz para no máximo 1280px de largura sem distorcer
        "-vf", f"scale='min({MAX_WIDTH},iw)':-2",

        # Áudio para web
        "-c:a", "aac",
        "-b:a", "96k",

        # Ajuda o vídeo carregar mais rápido no navegador
        "-movflags", "+faststart",

        str(temp)
    ]

    print(f"\nComprimindo: {entrada.name}")

    resultado = subprocess.run(
        comando,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    if resultado.returncode != 0:
        print(f"Erro ao comprimir: {entrada.name}")
        print(resultado.stderr)
        if temp.exists():
            temp.unlink()
        return

    tamanho_original = entrada.stat().st_size
    tamanho_novo = temp.stat().st_size

    print(f"Original: {tamanho_mb(tamanho_original):.2f} MB")
    print(f"Novo:     {tamanho_mb(tamanho_novo):.2f} MB")

    if tamanho_novo >= tamanho_original and not FORCE_REPLACE:
        print("O arquivo comprimido ficou maior ou igual. Mantendo o original.")
        temp.unlink()
        return

    os.replace(temp, entrada)
    reducao = 100 - ((tamanho_novo / tamanho_original) * 100)
    print(f"Substituído com sucesso. Redução: {reducao:.1f}%")


def main():
    videos = [
        arquivo for arquivo in PASTA.glob("*.mp4")
        if "__compress_tmp" not in arquivo.stem
    ]

    if not videos:
        print("Nenhum arquivo .mp4 encontrado nessa pasta.")
        return

    print(f"Pasta atual: {PASTA}")
    print(f"Arquivos encontrados: {len(videos)}")

    for video in videos:
        comprimir_video(video)

    print("\nFinalizado.")


if __name__ == "__main__":
    main()