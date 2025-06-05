import { linkEmits } from "element-plus";

export default {
    common: {
        add: 'Add',
        back: 'Back',
        save: 'Save',
        saved: 'Successfully saved',
        cancel: 'Cancel',
        edit: 'Edit',
        del: 'Delete',
        deleted: 'Successfully deleted',
        insert: 'Insert',
        nodeName: 'Node name',
        else: 'Otherwise',
        successTip: 'Success',
        errTip: 'Error',
        toDetail: 'View detail',
    },
    err: {},
    mainflow: {
        title: 'Main flow list',
        add: 'Add a new main flow',
        table: ['Main flow name', 'Enabled', 'Operations'],
        form: {
            title: 'Add a new main flow',
            name: 'Main flow name',
        },
        delConfirm: 'Are you sure you want to delete this main flow?',
    },
    flow: {
        nodes: ['DialogNode', 'ConditionNode', 'CollectNode', 'GotoNode'],
        nodesDesc: ['Returns the dialog text to the user', 'Setting up conditions to control where the dialog flow goes', 'Capture user input and save it to a variable', 'Jumping between dialog flows, or to an external link'],
        title: 'Compose dialog flow',
        steps: ['First step: publish flows', 'Second step: testing'],
        save: 'Save current sub-flow',
        pub: 'Publish all sub-flows',
        test: 'Test dialog flow',
        addSubFlow: 'Add sub-flow',
        form: {
            name: 'Sub-flow name',
        },
        subFlowReleased: 'Successfully released',
        needOne: 'Keep at least one sub-flow',
        delConfirm: 'Are you sure you want to delete this sub-flow?',
        send: 'Send',
        reset: 'Reset',
        changeSaveTip: 'The flow has been modified, do you need to save it and switch?',
        guideReset: 'The conversation is over, if you want to start over, please click the button below to restart',
    },
    dialogNode: {
        nodeName: 'Dialog node',
        nextSteps: ['Waiting for user response', 'Goto next node'],
        errors: ['Node name not filled in', 'Text not filled in', 'Text was too long'],
        form: {
            label: 'Text',
            addVar: 'Insert a variable',
            nextStep: 'Next step',
            choose: 'Select the action to be performed',
        },
        var: {
            title: 'Select a variable to be inserted',
            choose: 'Select a variable',
        }
    },
    conditionNode: {
        types: ['User intent', 'User input', 'Variable'],
        compares: ['Equals', 'NotEquals', 'Contains', 'User input timeout'],
        nodeName: 'Condition node',
        errors: ['Condition name not filled in', 'Duplicate condition name', 'Node name not filled in', 'Branches were missing'],
        newBranch: 'Add a new branch',
        condName: 'Name',
        condType: 'Condition',
        condTypePH: 'Select a condition type',
        comparedPH: 'Select the data to be compared',
        compareTypePH: 'Select the type of comparison',
        targetPH: 'Select a value for comparison',
        andCond: '"AND" condition',
        orCond: '"OR" condition',
        newCond: 'Conditions',
    },
    collectNode: {
        nodeName: 'Collection node',
        cTypes: ['User input', 'Number', 'Customize Regular Expression'],
        branches: ['Successful', 'Failure'],
        errors: ['Node name not filled in', 'Collection type not choosed', 'Saving variable not choosed', 'Branches were missing'],
        cTypeName: 'Collection type',
        varName: 'Assignment variable',
        labels: ['Collection type', 'Choose a collection type', 'Customize Regular Expression', 'Assignment variable', 'Choose a variable'],
    },
    gotoNode: {
        types: ['Conclusion of dialogues', 'Goto another flow', 'Goto sub-flow', 'External link'],
        nodeName: 'Goto node',
        errors: ['Node name not filled in', 'No goto type selected', 'Sub-flow not selected for jumping', 'No external link to fill in'],
        briefs: ['Goto type', 'Conclusion of dialogues', 'Goto sub-flow', 'External link', 'Goto another main flow'],
        gotoType: 'Goto type',
        gotoTypePH: 'Select a goto type',
        gotoMainFlow: 'Goto main flow',
        gotoMainFlowPH: 'Select a goto main flow',
        gotoSubFlow: 'Goto sub-flow',
        gotoSubFlowPH: 'Select a goto sub-flow',
        externalLink: 'External link',
    },
    intent: {
        title: 'Intent management',
        add: 'Add new intent',
        table: ['Name', 'Number of keywords', 'Number of regex', 'Number of phrases', 'Operations'],
        form: {
            title: 'Add new intent',
            name: 'name',
        },
        detail: {
            edit: 'Edit intent',
            kw: 'Keywords',
            addKw: 'Add keyword',
            re: 'Regular expressions',
            addRe: 'Add regex',
            sp: 'Similar phrases',
            addSp: 'Add phrase'
        },
    },
    settings: {
        title: 'Settings',
        ipNote: 'If the configured IP address is wrong and the application fails to start, please reset the configuration parameters by adding the startup parameter: -rs.',
        prompt2: 'Listening port',
        prompt2_2: 'When the set port is occupied, automatically randomly select other available ports',
        prompt3: 'Session length',
        prompt4: 'Minutes',
        note: 'Modified IP address, ports or session duration require a reboot to take effect',
        invalidIp: 'Incorrectly set IP address',
    },
    var: {
        types: ['String', 'Number'],
        sources: ['Import', 'Collect', 'External HTTP'],
        title: 'Variables management',
        add: 'Add new variable',
        table: ['Name', 'Type', 'Source of variable value', 'Operations'],
        form: {
            title: 'New Variable',
            name: 'Name',
            type: 'Type',
            choose1: 'Please choose a type',
            source: 'Value source',
            choose2: 'Please choose a source',
        },
    },
    home: {
        title: 'Dialog Flow Visual Editor and Responsing System',
        subTitle: 'Low code dialog flow responsing system',
        btn1: 'Getting Started',
        btn2: 'View docs',
        btn3: 'Try demos',
        dlTitle: 'Download',
        dl1: 'You can download the latest releases on Github',
        dl2: 'If you have any issues or feedback, please email to: dialogflow(AT)yeah.net or create an <a href="https://github.com/dialogflowai/dialogflow/issues">issue</a>',
        introTitle: 'What is this?',
        intro1: 'It\'s similar to Google\'s Dialogflow, but with an additional canvas for editing processes. It\'s also similar to Typebot, but it includes a full answering backend.',
        intro2: 'It has a feature called flow canvas that allows you to visually edit a conversation flow, test it, and finally publish it to the public.',
        intro3: 'Currently, it can return discourse to the user and capture user input, and can also execute different nodes through conditional judgment .',
        intro4: 'It is very small. The entire software, including front-end and back-end, is less than 6M in size, very easy to distribute and deploy.',
        intro5: 'You can modify the listening port of the software so that you can run multiple instances on the same server at the same time to handle different user scenarios.',
        intro6: 'Once it is downloaded, it can be used directly without installing any dependencies. And the data is stored locally, which can protect the data camp privacy.',
        midTitle: 'Advantages',
        adv1Title: 'Easy to use',
        adv1: 'Simple and intuitive.<br />Everybody can use it<br />Just few drag drop and clicks<br />A dialog flow can then be mapped out',
        demo: 'Try Demos',
        demo1: 'Notification of loan repayment',
        demo2: 'Information collection',
        demo3: 'Notification',
        demoUnvailableTitle: 'Demos are not available on Github',
        demoUnvailableContent: 'Since there is currently no server to host the backend.<br />But you can <a href="https://github.com/dialogflowai/dialogflow/releases">download</a> this software and try these 3 demonstration dialog flows',
        adv2Title: 'Tiny fast and portable',
        adv2: 'Only ONE executable file (database is generated automatically)<br />pretty easy for deployment<br />Relying on AoT compilation technology<br />Program provides high concurrency and blazingly fast responses',
        adv3Title: 'Deal with various issues',
        adv3: 'Use different combinations of flow nodes<br />Meet the business requirements of different scenarios<br />Solve problems encountered by different groups of people',
        adv4Title: 'Compatibilities',
        adv4: 'Front-end support for Firefox, Chrome, Microsoft Edge, Safari, Opera<br />and other major browsers<br /><br />The application supports deployment on Linux, Windows Server, macOS Server<br />and other operating systems.',
        adv5Title: 'Easy to integrate',
        adv5: 'Provides a response interface based on the HTTP protocol<br/ ><br />FreeSwitch can also be integrated to enable intelligent speech robots',
        adv5Doc: 'View docs',
    },
    guide: {
        title1: 'Dialog flows',
        nav1: 'Click here to create new dialog flow or edit existing flow',
        title2: 'Intentions',
        nav2: 'Intents management',
        desc2: 'Intent, used to summarize user input, what purpose does it belong to.',
        title3: 'Variables',
        nav3: 'Variables management',
        desc3: 'Variables are used to store user input, or external data from HTTP, which is used in the answer of the dialog flow, conditional judgment.',
        title4: 'System settings',
        nav4: 'Modify Configuration',
        desc4: 'Modify the listening port, session length, etc.',
        title5: 'Operation manual and integration documentation',
        nav5: 'View document',
        desc5: 'Understand how to quickly build a dialog flow through the canvas. Learn how to connect to the answering interface through code',
    },
    why: {
        title: 'Why?',
        desc: 'This intelligent tool offers several key advantages',
        list1: [
            { title: '💡 Free to use', content: 'There are no registration steps and no personal, machine information is collected.' },
            { title: '🎈 Light', content: 'Only ONE executable file. It can run smoothly on laptop without GPUs.' },
            { title: '✨ AI powered', content: 'Integrated OpenAI, Ollama and HuggingFace local LLMs, empowered your business.' }
        ],
        list2: [
            { title: '🛠️ Easy to use', content: 'Use the mouse to drag and drop with our intuitive node-based editor.' },
            { title: '🐱‍🏍 Fast', content: 'Built on Rust and Vue3. It requires very few resources to run very quickly.' },
            { title: '🔑 Safe', content: '100% open source. It can be used completely offline and all runtime data is saved locally.' }
        ]
    },
    nodesIntro: {
        title: 'Function nodes introduction',
        nodes: [
            {
                name: 'Dialog node',
                desc: 'You can set the text returned to the user,  \nand you can choose whether to wait for user input after the node returns the text,  \nor directly run the next node.',
                img: 'dialogNode.png',
                link: '/doc/node/dialogNode'
            },
            {
                name: 'Large language model chat node',
                desc: 'Use a large language model to communicate with users, supporting OpenAI, Ollama, and HuggingFace local models.  \nIf the model returns a timeout, you can also set another reply to return to the user.',
                img: 'llmChatNode.png',
                link: '/doc/node/llmChatNode'
            },
            {
                name: 'Knowledge base answer node',
                desc: 'This node can return Q&A knowledge, and can also find answers from uploaded documents.  \nIf you don\'t find a suitable answer, you can also set up an alternate answer.',
                img: 'knowledgeBaseAnswerNode.png',
                link: '/doc/node/knowledgeBaseAnswerNode'
            },
            {
                name: 'Conditions node',
                desc: 'In this node,  \nyou can determine whether the user input is equal to or contains certain text.  \nYou can also determine the intention of the user\'s input,  \nor determine whether the value in the variable is what you expect.',
                img: 'conditionNode.png',
                link: '/doc/node/conditionNode'
            },
            {
                name: 'Goto node',
                desc: 'Using this node,  \nyou can control the direction of the dialog.  \nYou can jump to another conversation, or goto external link.',
                img: 'gotoNode.png',
                link: '/doc/node/gotoNode'
            },
            {
                name: 'Collect node',
                desc: 'Using this node,  \nyou can save all or part of the content input by the user into a variable. Later,  \nthe content can be displayed as user text, conditionally judged,  \nor submitted to a third-party system through HTTP.',
                img: 'collectNode.png',
                link: '/doc/node/collectNode'
            },
            {
                name: 'External HTTP node',
                desc: 'Using this node,  \nyou can request an external HTTP interface,  \nand you can use this node to send input to the outside.  \nIf you need to get data from external HTTP,  \nplease create a variable and choose the value of the variable to be an HTTP interface.',
                img: 'externalApiNode.png',
                link: '/doc/node/externalHttpNode'
            },
            {
                name: 'Send email node',
                desc: 'This node can send preset email content or dynamic email content to multiple recipients.  \nIt can send emails synchronously or asynchronously.',
                img: 'sendEmailNode.png',
                link: '/doc/node/sendEmailNode'
            },
            {
                name: 'The end node',
                desc: 'This is an endpoint, indicating that a conversation flow has ended or terminated.',
                img: 'endNode.png',
                link: '/doc/node/theEndNode'
            },
        ]
    },
    howToUse: [{
        timestamp: '#1 Get started',
        title: 'Let\'s start with how to launch the application, it\'s very easy.',
        desc: '[View Tutorial](/#/doc/tutorial/get-started?lang=en)',
    }, {
        timestamp: '#2 Make the first dialog flow.',
        title: 'Creating a simplest notification bot in ONE minute.',
        desc: '[View Tutorial](/#/doc/tutorial/simplest-notification-robot?lang=en)',
    }],
    doc: {
        menu: {
            home: 'Home',
            intro: 'Introductions',
            tutorials: {
                title: 'Tutorials',
                getStarted: 'Get started',
                simplestNotificationRobot: 'Creating a notification bot',
                simplestUserInfoCollectRobot: 'Creating a simplest bot: User information collection bot',
                simplestUserInputCollectRobot: 'Creating a simplest bot: User input collection bot',
            },
            integration: {
                title: 'API integration',
                overview: 'Overview',
            },
            nodes: {
                title: 'Nodes',
                dialogNode: 'Dialog node',
                llmChatNOde: 'LLM chat node',
                kbAnswerNode: 'KB answer node',
                conditionNode: 'Condition node',
                collectNode: 'Collection node',
                gotoNode: 'Goto node',
                externalHttpNode: 'External HTTP node',
                sendEmailNode: 'Send email node',
                theEndNode: 'The end node',
            },
        }
    },
    tutorial: {
        GetStarted: {
            title: 'Get started.',
            desc: 'You can use it right after downloading. You don’t need to install any dependencies, don’t need a GPU, and don’t need to register any account.',
            steps: [{
                texts: ['**Use the compiled file**', '#1. Let\'s download from [release page on Github](https://github.com/dialogflowai/dialogflow/releases).'],
            }, {
                texts: ['#2. Download the corresponding package according to different operating systems and architectures'],
                img: 'GetStarted2.png'
            }, {
                texts: [
                    '#3. Let\'s take **Linux** as an example.', 'Download dialogflowai-Linux-x86_64.zip',
                    'After that, unzip it, add execution permissions: `chmod +x dialogflowai`, and start: `./dialogflowai`',
                    'The startup information is as follows:',
                    '```\n-->  The server is running, please open a browser and visit http://127.0.0.1:12715\nTip: You can use -ip and -port to customize the listening IP and port\n-------\nCurrent version: 1.19.0\nVisiting https://dialogflowai.github.io/ for the latest releases\n-->  Press Ctrl+C to terminate this application\n```',
                    'Use a browser to visit http://127.0.0.1:12715 to see the product interface',
                ],
                img: 'GetStarted3.png'
            }, {
                texts: [
                    'You can use `-ip` and `-port` to modify the default listening IP and port',
                    'For example: ./dialogflowai -ip 0.0.0.0 -port 8888',
                ],
            }, {
                texts: [
                    '**We also provide a `Docker` image**, You can directly use Docker to start.',
                    'Image address: [https://hub.docker.com/r/dialogflowai/dialogflow](https://hub.docker.com/r/dialogflowai/dialogflow)',
                ],
            }, {
                texts: [
                    'Alternatively, you can download source code and build by yourself.',
                    '[Frontend source code](https://github.com/dialogflowai/dialogflow/tree/main/frontend), [Backend source code](https://github.com/dialogflowai/dialogflow)',
                ],
            }],
        },
        SimplestNotificationRobot: {
            title: 'Creating a simplest bot: Notification bot',
            desc: 'Just 6 simple steps in less 2 mintes!',
            steps: [{
                texts: ['#1. Select the robot created by default.'],
                img: 'SimpleNotifyRobot1.png'
            }, {
                texts: ['#2. Click the link to go to the dialog flow list'],
                img: 'SimpleNotifyRobot2.png'
            }, {
                texts: ['#3. Select the default created dialog flow.'],
                img: 'SimpleNotifyRobot3.png'
            }, {
                texts: ['#4. Drag the end node onto the canvas.'],
                img: 'SimpleNotifyRobot4.png'
            }, {
                texts: ['#5. Double-click the node and fill in the content to be output in the pop-up window.'],
                img: 'SimpleNotifyRobot5.png'
            }, {
                texts: ['#6. Save and publish.'],
                img: 'SimpleNotifyRobot6.png'
            }, {
                texts: ['----------']
            }, {
                texts: ['Let\'s test'],
                img: 'SimpleNotifyRobot7.png'
            }, {
                texts: ['It works!'],
                img: 'SimpleNotifyRobot8.png'
            }],
        },
    }
}