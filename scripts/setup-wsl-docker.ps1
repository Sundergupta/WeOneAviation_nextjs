<#
setup-wsl-docker.ps1
Automates checks and (where possible) installation steps for WSL2 and Docker Desktop on Windows.

USAGE:
  1. Open PowerShell "Run as Administrator"
  2. cd to repository and run: .\scripts\setup-wsl-docker.ps1

NOTES:
  - This script requires administrative privileges (it will exit if not run as admin).
  - It attempts to use `wsl` and `winget` if available. If `winget` is not present, Docker Desktop should be installed manually.
  - The script asks before rebooting and will not reboot automatically without confirmation.
  - Running installs may open UI prompts (for example the Docker Desktop installer). Follow any on-screen prompts.
#>

function Is-Admin {
    try {
        $current = [Security.Principal.WindowsIdentity]::GetCurrent()
        $principal = New-Object Security.Principal.WindowsPrincipal($current)
        return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    } catch {
        return $false
    }
}

if (-not (Is-Admin)) {
    Write-Error "This script must be run as Administrator. Right-click PowerShell and choose 'Run as administrator'."
    exit 1
}

Write-Output "Running setup checks for WSL2 and Docker Desktop..."

# Check WSL availability
$wslCmd = Get-Command wsl -ErrorAction SilentlyContinue
if (-not $wslCmd) {
    Write-Output "WSL command not found. Attempting 'wsl --install' (may require reboot)."
    try {
        wsl --install
    } catch {
        Write-Warning "Failed to run 'wsl --install' automatically. Please run 'wsl --install' in an elevated PowerShell or install WSL following Microsoft docs: https://docs.microsoft.com/windows/wsl/install"
    }
} else {
    Write-Output "WSL is installed. Making sure WSL is up-to-date and default is v2..."
    try { wsl --update } catch { Write-Warning "wsl --update failed or not required: $_" }
    try { wsl --set-default-version 2 } catch { Write-Warning "Could not set default WSL version to 2: $_" }
}

# Check for Ubuntu distro
$hasUbuntu = $false
try {
    $distros = wsl -l -v 2>&1
    if ($distros -match "Ubuntu") { $hasUbuntu = $true }
} catch {
    # ignore
}

if (-not $hasUbuntu) {
    Write-Output "Ubuntu distro not found. Attempting to install Ubuntu distro (this may take a while)..."
    try { wsl --install -d ubuntu } catch { Write-Warning "Automatic Ubuntu install failed: $_`nYou can install a distro from Microsoft Store or run 'wsl --install -d ubuntu' after rebooting." }
} else {
    Write-Output "Ubuntu distro found."
}

# Check winget availability
$wingetCmd = Get-Command winget -ErrorAction SilentlyContinue
if (-not $wingetCmd) {
    Write-Warning "winget is not available on this system. If you want to install Docker Desktop via command line install App Installer from Microsoft Store or install Docker Desktop manually: https://docs.docker.com/desktop/install/windows/"
} else {
    # Check for docker
    $dockerCmd = Get-Command docker -ErrorAction SilentlyContinue
    if ($dockerCmd) {
        Write-Output "Docker CLI already installed."
    } else {
        Write-Output "Installing Docker Desktop via winget (requires admin). This may open an installer UI."
        $installResult = & winget install -e --id Docker.DockerDesktop
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "winget reported a non-zero exit code. Install may have failed or requires manual interaction. Please install Docker Desktop manually if this fails."
        } else {
            Write-Output "Docker Desktop installation command issued. Follow any on-screen prompts."
        }
    }
}

Write-Output "\nManual steps you should complete after this script finishes:"
Write-Output " - Reboot your machine if you haven't already (some WSL changes require reboot)."
Write-Output " - Open Docker Desktop and sign-in/accept license if prompted."
Write-Output " - In Docker Desktop: Settings → Resources → WSL Integration → Enable integration for your Ubuntu distro."
Write-Output " - Open a NEW PowerShell window (not elevated) and verify: 'docker --version' and 'docker run hello-world'"

# Offer to reboot
$choice = Read-Host "Would you like to reboot now to complete WSL/Docker setup? (Y/N)"
if ($choice -match '^[Yy]') {
    Write-Output "Rebooting the system to complete setup..."
    Restart-Computer -Force
} else {
    Write-Output "Skipping reboot. Please reboot manually later if required."
}

Write-Output "\nDone. If you run into errors, copy the exact error output and paste it here and I will help debug."