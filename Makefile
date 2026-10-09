SHELL = /bin/sh

.PHONY: resolve

resolve:
	@docker run -it --rm \
		-u $$(id -u):$$(id -g) \
		-v "$$(pwd):/srv" \
		-w /srv \
		node:22-alpine \
		node $(problem)/index.js