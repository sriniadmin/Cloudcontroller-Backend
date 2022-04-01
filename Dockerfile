FROM node:17-alpine
#FROM node:10-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#WORKDIR /home/node/app


ARG USER=default
ENV HOME /home/$USER

# install sudo as root
RUN apk add --update sudo
RUN apk add --update nodejs npm
RUN apk add python3
RUN apk add pkgconfig
RUN apk add pixman-dev
RUN apk add cairo
RUN apk add cairo-dev
RUN apk add pango-dev
RUN apk add make
RUN apk add g++
RUN apk add poppler-utils

#     sudo apt-get install -y libxkbcommon-x11-0
#     sudo apt-get install -y libxdamage-dev
#     sudo apt-get install -y libgbm-dev
#     sudo apt-get install -y libpango-1.0-0
#     sudo apt-get install -y libcairo2-dev
    


# add new user
RUN adduser -D $USER \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER \
        && chmod 0440 /etc/sudoers.d/$USER

USER $USER
WORKDIR $HOME

# files in /home/$USER to be owned by $USER
# docker has --chown flag for COPY, but it does not expand ENV so we fallback to:
# COPY src src
# RUN sudo chown -R $USER:$USER $HOME

CMD echo "User $(whoami) running from $PWD with premissions: $(sudo -l)"

COPY package*.json ./

RUN sudo npm install
RUN sudo npm install pm2 -g

COPY --chown=$USER:$USER . .

EXPOSE 7124
CMD ["pm2-runtime", "app.js"]
#CMD sleep 10000

#CMD /home/node/app/node_modules/pm2/bin/pm2 start /home/node/app/app.js
#CMD export $(cat .env) && node app.js

