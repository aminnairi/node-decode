.PHONY: test build install

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--user root -T --rm
endif

install:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm install

test:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run test

build:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run build
