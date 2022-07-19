default:
	cat Makefile


FILE_CERTIFICATIONTOOLS  := "../../../.env.node/lib/node_modules/powerbi-visuals-tools/lib/CertificateTools.js"

cert:
	pbiviz --install-cert
	echo "Finally: Edit Cert in Certification Manager - set Vertrauen to 'Immer Vertrauen'"

install_cert_fix: clean_certs
	sed -i '' '1,$$s/const subject = "localhost"/const subject = "PowerBi Visual: Created with pbiviz"/g' $(FILE_CERTIFICATIONTOOLS)

install_cert_edit:
	vi $(FILE_CERTIFICATIONTOOLS)

clean_certs:
	rm -f ../../../.env.node/lib/node_modules/powerbi-visuals-tools/certs/PowerBICustomVisualTest_p*


install:
	pnpm install
	
start:
	pbiviz start

package:
	pbiviz package
