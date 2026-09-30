
$root = "c:\Users\JOBSENHR\Desktop\ANGELINO ADVENTURES"

function Check-File($relPath) {
    $full = Join-Path $root $relPath
    if (-not (Test-Path $full)) { Write-Host "NOT FOUND: $relPath"; return }
    $content = [System.IO.File]::ReadAllText($full)
    $hStart = $content.IndexOf('<header class="header">')
    if ($hStart -lt 0) { Write-Host "NO HEADER: $relPath"; return }
    $hEnd = $content.IndexOf('</header>', $hStart) + 9
    $header = $content.Substring($hStart, $hEnd - $hStart)
    
    # Extract unique src/href values that are relative
    $matches = [regex]::Matches($header, '(?:src|href)="([^"]+)"')
    $relative = $matches | ForEach-Object { $_.Groups[1].Value } | Where-Object { $_ -notmatch '^http|^#|^/' } | Sort-Object -Unique | Select-Object -First 8
    
    Write-Host ""
    Write-Host "=== $relPath ==="
    $relative | ForEach-Object { Write-Host "  $_" }
}

# Depth 0 - root
Check-File "index.html"

# Depth 1 - one level deep
Check-File "tanzania-safari\parks.html"
Check-File "articles\why-choose-angelino-travel.html"

# Depth 2 - two levels deep
Check-File "tanzania-safari\tours\impala.html"
Check-File "climbing-kilimanjaro\routes\lemosho.html"
