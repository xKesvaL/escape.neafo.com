#!/bin/bash

SETCOLOR_FAILURE="\\033[1;31m"
SETCOLOR_SUCCESS="\\033[1;32m"
SETCOLOR_WARNING="\\033[1;33m"
SETCOLOR_NORMAL="\\033[0;39m"

success() {
    echo -e "${SETCOLOR_SUCCESS}$*${SETCOLOR_NORMAL}"
}
error() {
    echo -e "${SETCOLOR_FAILURE}$*${SETCOLOR_NORMAL}"
    exit 1
}
warn() {
    echo -e "${SETCOLOR_WARNING}$*${SETCOLOR_NORMAL}"
}

INSTALL_DIR=/var/www/

if [ $# = 1 ]; then 
	if [ $1 = '-h' ] || [ $1 = '--help' ]; then
		warn "Usage: $0 [repertoire_d_installation]"
		echo "par défaut le répertoire d'installation est $INSTALLDIR"
    	exit 0
	else
		INSTALLDIR="$1"
	fi
fi   

cd "$INSTALLDIR"

echo
success '+----------------------------------------------------------+'
success "| Script d'installation et de mise à jour de la passerelle |"
success '+----------------------------------------------------------+'

if [ $(id -u) != 0 ]; then
	error "Ce script nécessite des droits root, merci de faire su ou sudo $0"
fi

if $(which dpkg) -L apt  2>/dev/null | grep -q $(which apt-get); then
	success 'Système Debian ou Ubuntu - compatible avec le script'
else
	error 'Désolé ce script est conçu pour une distribution Debian ou Ubuntu ! Vous pouvez vous inspirer du script et de la documentation pour installer sur un autre système'
fi

warn ' *** Installation ou mise à jour des paquets *** '
apt -qq update
apt -qq install openssl apache2 unzip curl gnupg

warn ' *** Installation ou mise à jour de NodeJS *** '

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt -qq install nodejs

warn ' *** Installation ou mise à jour de Bun *** '

curl -fsSL https://bun.sh/install | bash

warn ' *** Installation ou mise à jour de MongoDB *** '

curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] http://repo.mongodb.org/apt/debian bookworm/mongodb-org/7.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt update
apt install -qq mongodb-org

if [ -d "$INSTALLDIR/escape.neafo.com" ]; then
	warn ' *** Une installation de SAE401 semble déjà présente ***'
else
	warn ' *** Nouvelle installation détectée, activation proxy ***'
	a2enmod proxy
	a2enmod proxy_http
	systemctl restart apache2

	doinstall=1
fi

echo
warn " *** Récupération de l'archive sur git ... ***"
wget -q https://github.com/xKesvaL/escape.neafo.com/archive/refs/heads/main.zip
success  '     ==> Fait'

echo
warn " *** Extraction de l'archive ... ***"
unzip -q main.zip
mv escape.neafo.com-main escape.neafo.com

cd escape.neafo.com

warn " *** Installation des dépendances Node ***"
bun install

cd web/site
warn " *** Build de l'application ***"
bun run build

if [ $doinstall ]; then
  bun install pm2 -g
  bun install vite -g

  warn '*** Si vous utilisez apache, voyez les fichiers dans le dossier apache pour configuer le proxy. ***'
  warn '*** Sinon, vous pouvez vous inspirer en utilisant votre serveur web préféré.                    ***'
  warn '*** Pour lancer le serveur node `pm2 start ecosystem.config.cjs                                 ***'
fi

echo
success '+------------------------------------------------+'
success "| Installation et mise à jour de SAE401 terminée |"
success '+------------------------------------------------+'
