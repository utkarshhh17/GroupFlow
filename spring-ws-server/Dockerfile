FROM maven:3.9.6-openjdk-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install

# Stage 2: Run the application
FROM openjdk:21-atpine
WORKDIR /app
COPY --from=build /app/target/chat-0.0.1-SNAPSHOT.jar ./demo-aws.jar
EXPOSE 8080
CMD ["java", "-jar", "demo-aws.jar"]