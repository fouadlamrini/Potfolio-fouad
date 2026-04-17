<#
  Supprime img1.png puis renomme img2→img1, img3→img2, … jusqu’à $MaxIndex.
  À lancer depuis la racine du portfolio (là où se trouve le dossier public/).

  Exemples:
    .\scripts\rename-gallery-images.ps1 -RelativeDir "public/Projets/Mern/YouHelp" -MaxIndex 40
    .\scripts\rename-gallery-images.ps1 -RelativeDir "public/Projets/Mern/Quizz" -MaxIndex 7
#>
param(
  [Parameter(Mandatory = $true)]
  [string] $RelativeDir,
  [Parameter(Mandatory = $true)]
  [int] $MaxIndex
)

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$dir = Join-Path $root $RelativeDir

if (-not (Test-Path $dir)) {
  Write-Warning "Dossier introuvable: $dir"
  exit 1
}

$img1 = Join-Path $dir "img1.png"
if (Test-Path $img1) {
  Remove-Item -LiteralPath $img1 -Force
  Write-Host "Supprimé: $img1"
} else {
  Write-Host "Pas de img1.png (déjà supprimé?): $img1"
}

for ($k = 2; $k -le $MaxIndex; $k++) {
  $from = Join-Path $dir "img$k.png"
  if (-not (Test-Path $from)) {
    Write-Warning "Fichier manquant (ignoré): $from"
    continue
  }
  $newName = "img$($k - 1).png"
  Rename-Item -LiteralPath $from -NewName $newName -Force
  Write-Host "Renommé: img$k.png -> $newName"
}

Write-Host "Terminé: $dir"
