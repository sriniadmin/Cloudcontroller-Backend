DOCKER_BUILDKIT=1 docker build -t nodelive247 .
cd ws; DOCKER_BUILDKIT=1 docker build -t live-ws .; cd -;
