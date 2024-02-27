<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { java } from '@codemirror/lang-java';
const langJava = java();
const host = window.location.host;
const javaCode = ref(`import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {

    public static void main(String[] args) throws IOException, InterruptedException {

        // Data preparation (replace with your actual values)
        String mainFlowId = "";
        String sessionId = "";
        String userInputResult = "Successful || Timeout";
        String userInput = "hello";
        ImportVariable[] importVariables = {
                new ImportVariable("varName", "var1"),
                new ImportVariable("varType", "String"),
                new ImportVariable("varValue", "abc"),
                new ImportVariable("varName", "var2"),
                new ImportVariable("varType", "Number"),
                new ImportVariable("varValue", "123")
        };
        String userInputIntent = "IntentName";

        // Create PostData object
        PostData postData = new PostData(mainFlowId, sessionId, userInputResult, userInput, importVariables, userInputIntent);

        // Serialize PostData to JSON using Jackson
        ObjectMapper mapper = new ObjectMapper();
        String jsonData = mapper.writeValueAsString(postData);

        // Send request
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(java.net.URI.create("http://localhost:5173/flow/answer"))
                .POST(HttpRequest.BodyPublishers.ofString(jsonData))
                .header("Content-Type", "application/json")
                .build();

        // Send request and handle response
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Define response structure classes
        class ResponseData {
            public Answers answers;
            public String[] collectData;
            public String nextAction;
            public ExtraData extraData;

            public static class Answers {
                public String[] answerList;
            }

            public static class ExtraData {
                public String externalLink;
            }
        }

        class ApiResponse {
            public int status;
            public ResponseData data;
            public String err;
        }

        // Deserialize JSON response using Jackson
        String responseString = response.body(); // Assuming successful request
        ApiResponse apiResponse = mapper.readValue(responseString, ApiResponse.class);

        // Check for successful response
        if (apiResponse.status == 200) {
            // Print answers
            System.out.println("Answers:");
            for (String answer : apiResponse.data.answers.answerList) {
                System.out.println(answer);
            }
        } else {
            System.out.println("Error: " + apiResponse.status);
        }
    }
}

class ImportVariable {
    private String name;
    private String value;

    public ImportVariable(String name, String value) {
        this.name = name;
        this.value = value;
    }

    // Getters and setters (optional)
}

class PostData {
    private String mainFlowId;
    private String sessionId;
    private String userInputResult;
    private String userInput;
    private ImportVariable[] importVariables;
    private String userInputIntent;

    public PostData(String mainFlowId, String sessionId, String userInputResult, String userInput, ImportVariable[] importVariables, String userInputIntent) {
        this.mainFlowId = mainFlowId;
        this.sessionId = sessionId;
        this.userInputResult = userInputResult;
        this.userInput = userInput;
        this.importVariables = importVariables;
        this.userInputIntent = userInputIntent;
    }

    @Override
    public String toString() {
        return "PostData{" +
                "mainFlowId='" + mainFlowId + '\'' +
                ", sessionId='" + sessionId + '\'' +
                ", userInputResult='" + userInputResult + '\'' +
                ", userInput='" + userInput + '\'' +
                ", importVariables=" + java.util.Arrays.toString(importVariables) +
                ", userInputIntent='" + userInputIntent + '\'' +
                '}';
    }
}`)
</script>
<template>
    <h1>Java (11 or higher) Code (using Apache HttpClient):</h1>
    <code-mirror basic :lang="langJava" v-model="javaCode" />
</template>