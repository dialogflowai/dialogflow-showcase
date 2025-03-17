<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { python } from '@codemirror/lang-python';
const langPython = python();
const host = window.location.host;
const pythonCode = ref(`if __name__ == "__main__":
    try:
        sdk = DialogFlowChatBotSDK("http://192.168.0.108:12715/flow/answer")
        request_data = RequestData(
            robotId="r03d3slzkhr7y368qwqfkxfdtp",
            mainFlowId="103d3slzkp1pdrzu1fnnve2wwm"
        )

        while True:
            try:
                response = sdk.send_post_request(request_data)

                if response is None:
                    print("Response is None")
                    break

                if response.status != 200:
                    print(f"Response failed with status code: {response.status}")
                    if response.err:
                        print(f"Error: {response.err}")
                    break

                if response.data is None:
                    print("Response data is None")
                    break

                for answer in response.data.answers:
                    print(f"Answer: {answer.content} (Type: {answer.contentType})")

                if response.data.nextAction == NextAction.TERMINATE:
                    print("Terminating the conversation.")
                    break

                if request_data.userInputIntent is not None and len(request_data.userInputIntent) == 0:
                    request_data.userInputIntent = None

                if request_data.sessionId is None or len(request_data.sessionId) == 0:
                    request_data.sessionId = response.data.sessionId

                user_input = input("Input your question: ")
                request_data.set_user_input(user_input)

            except Exception as e:
                print(f"An error occurred: {e}")

    except ValueError as ve:
        print(f"Invalid endpoint: {ve}")`)
</script>

<template>
    <h1>Python SDK</h1>
    <p>We provides a Python SDK: <a href="https://github.com/dialogflowchatbot/dialogflow/tree/main/sdk/python">https://github.com/dialogflowchatbot/dialogflow/tree/main/sdk/python</a></p>
    <h1>Sample code</h1>
    <code-mirror basic :lang="langPython" v-model="pythonCode" />
</template>
