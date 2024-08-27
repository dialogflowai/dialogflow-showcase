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
import java.util.List;

public class HttpClientExample {

    public static void main(String[] args) throws IOException, InterruptedException {

        // Data preparation (replace with your actual values)
        String robotId = "";
        String mainFlowId = "";
        String sessionId = ""; // Can leave it empty.
        String userInputResult = "Successful || Timeout"; // Only for outbound/incoming call bot, text chat bot can always fill 'Successful'
        String userInput = "hello";
        ImportVariable[] importVariables = {
                new ImportVariable("var1", "String", "abc"),
                new ImportVariable("var2", "Number", "123")
        };
        String userInputIntent = "IntentName";

        // Create PostData object
        PostData postData = new PostData(robotId, mainFlowId, sessionId, userInputResult, userInput, importVariables, userInputIntent);

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
            public String sessionId;
            public List<Answer> answers;
            public List<CollectData> collectData;
            public String nextAction;
            public ExtraData extraData;

            public static class Answer {
                public String text;
                public String answerType;
            }

            public static class CollectData {
                public String varName;
                public String value;
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
    private String varName;
    private String varType;
    private String varValue;

    public ImportVariable(String name, String type, String value) {
        this.varName = name;
        this.varType = type;
        this.varValue = value;
    }

    // Getters and setters (optional)
}

class PostData {
    private String robotId;
    private String mainFlowId;
    private String sessionId;
    private String userInputResult;
    private String userInput;
    private ImportVariable[] importVariables;
    private String userInputIntent;

    public PostData(String robotId, String mainFlowId, String sessionId, String userInputResult, String userInput, ImportVariable[] importVariables, String userInputIntent) {
        this.robotId = robotId;
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
                "robotId='" + robotId + '\'' +
                ", mainFlowId='" + mainFlowId + '\'' +
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
