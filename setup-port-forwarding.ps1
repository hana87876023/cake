# PowerShellスクリプト（管理者権限で実行）
# WSL2のIPアドレスを取得
$wslIp = (wsl hostname -I).trim()
Write-Host "WSL2 IP: $wslIp"

# ポートフォワーディングルールを追加
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=$wslIp

# ファイアウォールルールを追加
New-NetFirewallRule -DisplayName "Vite Dev Server" -Direction Inbound -Protocol TCP -LocalPort 5173 -Action Allow

Write-Host "ポートフォワーディングが設定されました"
Write-Host "外部からアクセス可能なURL: http://[あなたのPCのIPアドレス]:5173/"

# 現在のIPアドレスを表示
$hostIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.InterfaceAlias -notlike "*WSL*"}).IPAddress
Write-Host "あなたのPCのIPアドレス: $hostIp"