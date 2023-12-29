FROM openjdk:21
WORKDIR /app
EXPOSE 8080
LABEL maintainer="javaguides.net"
ADD target/chat-0.0.1-SNAPSHOT.jar chat-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","chat-0.0.1-SNAPSHOT.jar"]