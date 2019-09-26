# Working directory
wd := $(shell git rev-parse --show-toplevel)

# Submodule paths
4NXCIDIR = $(wd)/4NXCI
4NXCIBIN = $(4NXCIDIR)/4nxci
MBEDTLSDIR = $(4NXCIDIR)/mbedtls
CONFIGMKFILE := $(4NXCIDIR)/config.mk

# Define 4nxci config.mk file with emscripten tools and Mbed TLS bitcode files
define CONFIGMK
CC = emcc
MAKE = emmake make
OUTPUT = $(wd)/$@
CFLAGS = -O2 -Wall -Wextra -pedantic -std=gnu11 -fPIC
LDFLAGS = sha.o \
		  aes.o \
		  extkeys.o \
		  pki.o \
		  hfs0.o \
		  utils.o \
		  nsp.o \
		  nca.o \
		  cnmt.o \
		  xci.o \
		  main.o \
		  filepath.o \
		  ConvertUTF.o \
		  romfs.o \
		  rsa.o \
		  mbedtls/library/libmbedcrypto.bc \
		  mbedtls/library/libmbedtls.bc \
		  mbedtls/library/libmbedx509.bc
EMFLAGS = -s INVOKE_RUN=0 \
		  -s FORCE_FILESYSTEM=1 \
		  -s EXIT_RUNTIME=0 \
		  -s ALLOW_MEMORY_GROWTH=1 \
		  -s EXPORT_NAME='XCIConverter' \
		  -s "EXTRA_EXPORTED_RUNTIME_METHODS=['callMain']"
endef

export CONFIGMK

4nxci.js: mbedtls
# Write config.mk file if it doesn't exist
ifeq ("$(wildcard $(CONFIGMKFILE))","")
	echo "$$CONFIGMK" > $(CONFIGMKFILE)
endif
	# Make 4NXCI with emscripten
	emmake make 4nxci -C $(4NXCIDIR)

mbedtls:
	# Generate Mbed TLS bitcode static libs to build folder
	emcmake cmake -S $(MBEDTLSDIR) -B mbedtls -DEMSCRIPTEN_GENERATE_BITCODE_STATIC_LIBRARIES=1
	emmake make lib -C mbedtls

devserver:
	python devserver.py

clean_mbedtls:
	rm -rf $(wd)/mbedtls

clean_4nxci:
	emmake make clean -C $(4NXCIDIR)

clean: clean_4nxci
	rm -f 4nxci.js 4nxci.wasm
	rm -f $(CONFIGMKFILE)

clean_all: clean clean_4nxci clean_mbedtls
