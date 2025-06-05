// https://vue-i18n.intlify.dev/guide/essentials/syntax.html#html-message
export default {
    common: {
        add: '新增',
        back: '返回',
        save: '保存',
        saved: '保存成功',
        cancel: '取消',
        edit: '编辑',
        del: '删除',
        deleted: '删除成功',
        insert: '插入',
        nodeName: '节点名称',
        else: '否则',
        successTip: '成功提示',
        errTip: '错误提示',
        toDetail: '查看详情',
    },
    err: {},
    mainflow: {
        title: '主流程列表',
        add: '增加主流程',
        table: ['主流程名称', '是否启用', '操作'],
        form: {
            title: '新增主流程',
            name: '主流程名称',
        },
        delConfirm: '确认要删除该主流程吗?',
    },
    flow: {
        nodes: ['话术节点', '条件节点', '采集节点', '跳转节点'],
        nodesDesc: ['返回话术给用户', '设置条件，控制流程走向', '采集用户输入的信息，并保存到变量中', '流程之间跳转，或跳转至外部'],
        title: '绘制对话流程',
        steps: ['第一步：发布流程', '第二步：开始测试'],
        save: '保存当前流程',
        pub: '发布所有流程',
        test: '测试流程',
        addSubFlow: '新增子流程',
        form: {
            name: '子流程名',
        },
        subFlowReleased: '发布成功',
        needOne: '最少保留一个子流程',
        delConfirm: '确认要删除该子流程吗?',
        send: '发送',
        reset: '重置',
        changeSaveTip: '流程已经修改，需要保存并切换吗?',
        guideReset: '流程结束,如需重新开始请点下方重来按钮',
    },
    dialogNode: {
        nodeName: '话术节点',
        nextSteps: ['等待用户回复', '执行下一个节点'],
        errors: ['未填写节点名称', '未填写话术信息', '话术信息超长, 需少于200字'],
        form: {
            label: '节点话术',
            addVar: '插入变量',
            nextStep: '下一步',
            choose: '选择执行的操作',
        },
        var: {
            title: '选择需要插入的变量',
            choose: '选择变量',
        }
    },
    conditionNode: {
        types: ['用户意图', '用户输入', '流程变量'],
        compares: ['等于', '不等于', '包含', '用户输入超时'],
        nodeName: '条件节点',
        errors: ['请输入条件名称', '输入的条件名称重复', '未填写节点名称', '未设置条件分支'],
        newBranch: '添加分支',
        condName: '名称',
        condType: '条件类型',
        condTypePH: '请选择条件类型',
        comparedPH: '请选择被比较数据',
        compareTypePH: '请选择比较类型',
        targetPH: '请选择比较的值',
        andCond: '"与"条件',
        orCond: '添加"或"条件',
        newCond: '添加条件',
    },
    collectNode: {
        nodeName: '采集节点',
        cTypes: ['用户输入', '数字', '自定义正则'],
        branches: ['采集成功', '采集失败'],
        errors: ['未填写节点名称', '未选择采集类型', '未选择保存变量', '未添加分支信息'],
        cTypeName: '采集类型',
        varName: '保存的变量',
        labels: ['采集类型', '请选择采集类型', '自定义正则', '赋值变量', '请选择变量'],
    },
    gotoNode: {
        types: ['结束对话', '主流程', '子流程', '外部链接'],
        nodeName: '跳转节点',
        errors: ['未填写节点名称', '未选择跳转类型', '未选择跳转的子流程', '未填写跳转的外部链接'],
        briefs: ['执行动作', '结束流程', '跳转到子流程', '跳转到外部链接', '跳转到主流程'],
        gotoType: '跳转类型',
        gotoTypePH: '请选择跳转类型',
        gotoMainFlow: '跳转的主流程',
        gotoMainFlowPH: '选择跳转的主流程',
        gotoSubFlow: '跳转的子流程',
        gotoSubFlowPH: '选择跳转的子流程',
        externalLink: '外部链接',
    },
    intent: {
        title: '意图管理',
        add: '新增意图',
        table: ['意图名', '关键词数量', '正则数量', '相似问数量', '操作'],
        form: {
            title: '新增意图',
            name: '意图名',
        },
        detail: {
            edit: '编辑意图',
            kw: '关键词',
            addKw: '新增关键词',
            re: '正则表达式',
            addRe: '新增正则',
            sp: '相似表达句子',
            addSp: '新增相似问'
        },
    },
    settings: {
        title: '配置管理',
        ipNote: '如果配置的IP地址错误导致应用启动失败, 请在启动是, 加上 -rs 来重置配置参数',
        prompt2: '应用端口',
        prompt2_2: '当指定端口被占用, 随机选择一个可用的端口',
        prompt3: '会话时长',
        prompt4: '分钟',
        note: '修改了IP地址, 端口或会话时长，需要重启应用才能生效',
        invalidIp: '设置的IP地址不正确',
    },
    var: {
        types: ['字符串', '数字'],
        sources: ['外部导入', '流程采集', '远程HTTP接口(正式版)'],
        title: '变量管理',
        add: '新增变量',
        table: ['变量名', '变量类型', '变量取值来源', '操作'],
        form: {
            title: '流程变量',
            name: '变量名称',
            type: '变量类型',
            choose1: '请选择变量类型',
            source: '变量取值来源',
            choose2: '请选择变量取值来源',
        },
    },
    home: {
        title: 'Dialog Flow 对话流程可视化编辑器',
        subTitle: '低代码流程应答系统',
        btn1: '立即使用',
        btn2: '查看文档',
        btn3: '查看演示Demo',
        dlTitle: '下载',
        dl1: '您可以从Github上下载到最新版',
        dl2: '如果您有任何意见或建议, 请发邮件到: dialogflow(AT)yeah.net 或者创建一个 <a href="https://github.com/dialogflowai/dialogflow/issues">帖子</a>',
        introTitle: '这是什么软件?',
        intro1: '它类似 Google 的 Dialogflow, 但是多了一个流程画布编辑器，可以更好的设计流程. 它也像 Typebot, 但是多了一个完整的应答后端.',
        intro2: '它拥有一个可视化的流程编辑器, 编辑完成后，可以测试流程, 并最终发布流程.',
        intro3: '目前，它可以返回话术给用户，并采集用户输入，还可以通过条件判断，执行不同的节点.',
        intro4: '它很轻量。整个软件，包含了前端和后端，只有不到 6M 大小，非常易于分发和部署.',
        intro5: '你可以修改软件的监听端口，这样就可以在同一台服务器上，同时运行多个实例，解决不同的用户场景.',
        intro6: '它下载后，就可以直接使用，不用安装任何依赖。而且数据是存放在本地，可以保护数据营隐私.',
        midTitle: '我们的优势',
        adv1Title: '易用',
        adv1: '简便、直观的编辑界面。<br />人人都会使用<br />只需简单的鼠标拖拽和点击<br />就可以绘制出一个对话流程',
        demo: '演示',
        demo1: '电话催收',
        demo2: '用户信息收集',
        demo3: '一句话通知',
        demoUnvailableTitle: '演示在Github上不可用Demos are not available on Github',
        demoUnvailableContent: '由于目前没有服务器来托管后台.<br />但是可以<a href="https://github.com/dialogflowai/dialogflow/releases">下载该软件</a>, 它包含了3个演示对话流程',
        adv2Title: '小巧、快速',
        adv2: '只有两个文件（程序和数据库），部署非常方便。<br />依托AoT编译技术<br />可提供超高的并发数和超快的响应',
        adv3Title: '解决各种问题',
        adv3: '使用不同的流程节点组合<br />满足不同场景业务需求<br />解决不同人群遇到的问题',
        adv4Title: '兼容性',
        adv4: '前端支持 Firefox、Chrome、Microsoft Edge、Safari、Opera 等主流浏览器<br /><br />该应用支持部署在 Linux、Windows Server、macOS Server 等操作系统',
        adv5Title: '易于集成',
        adv5: '提供了基于HTTP协议的应答接口<br />还可以集成 FreeSwitch 以实现智能语言机器人',
        adv5Doc: '查看文档',
    },
    guide: {
        title1: '创建对话流程',
        nav1: '开始绘制',
        title2: '我们内置了“肯定”、“否定”意图。若不够，可自行添加',
        nav2: '意图管理',
        desc2: '意图，是指用户说的话，符合某种想法。',
        title3: '需要储存用户输入，或获取外部数据？',
        nav3: '创建变量',
        desc3: '变量用于保存一些不确定的数据，它用在流程的答案、条件判断里。',
        title4: '系统设置',
        nav4: '修改配置',
        desc4: '修改监听端口、会话长度等',
        title5: '操作手册和对接文档',
        nav5: '查看文档',
        desc5: '了解如何通过画布，快速的构建出流程。了解如何通过代码，对接应答接口',
    },
    why: {
        title: '为什么选择Dialog Flow AI?',
        desc: 'Dialog Flow AI 是一个低代码的对话应答系统，它可以帮助你快速构建一个对话流程，并且可以通过代码，对接应答接口。',
        list1: [
            { title: '💡 完全免费', content: '不用任何注册信息, 不会收集个人或机器信息. 请放心使用.' },
            { title: '🎈 非常轻量级', content: '只需一个文件就可以执行，无需安装任何依赖. 并且可以在没有GPU的机器上丝滑运行.' },
            { title: '✨ AI 驱动', content: '集成了 OpenAI, Ollama 还有 HuggingFace 的本地模型, 用AI来驱动你的业务.' }
        ],
        list2: [
            { title: '🛠️ 易于使用', content: '使用鼠标进行节点的拖拽，即可在很短时间内，创建一个对话机器人.' },
            { title: '🐱‍🏍 快速', content: '后端使用 Rust，前端使用 Vue3 来构建. 只需要一点点资源就可以流畅得跑起来.' },
            { title: '🔑 高度安全', content: '100% 开源. 它可以完全离线运行，并且所有的数据都保存在本地，无需上云.' }
        ]
    },
    nodesIntro: {
        title: '功能节点介绍',
        nodes: [
            {
                name: '文本对话节点',
                desc: '你可以设置返回给用户的文字，可以提前写下固定的话术，或者也可以选择大模型来动态回复,  \n然后你可以选择，当文本答案返回了以后，是等待用户输入,  \n还是直接跳转到下一个节点.',
                img: 'dialogNode.png',
                link: '/doc/node/dialogNode'
            },
            {
                name: '大模型聊天节点',
                desc: '使用大模型和用户交流, 支持 OpenAI, Ollama, 和 HuggingFace 本地大模型.  \n如果大模型返回超时, 你可以设置备用答案返回给用户，或者直接跳转到下一个节点.',
                img: 'llmChatNode.png',
                link: '/doc/node/llmChatNode'
            },
            {
                name: '知识库答案节点',
                desc: '该节点可以返回问答知识, 也可以返回文档里的知识.  \n如果没有找到合适的答案, 你还可以设置一个备选答案.',
                img: 'knowledgeBaseAnswerNode.png',
                link: '/doc/node/knowledgeBaseAnswerNode'
            },
            {
                name: '条件节点',
                desc: '使用这个节点,  \n你可以设置条件来判断用户输入的内容，是否等于或不等于某些固定字符.  \n你也可以判断用户输入内容属于哪些意图,  \n或者是判断变量的值，是否等于你期望的内容.',
                img: 'conditionNode.png',
                link: '/doc/node/conditionNode'
            },
            {
                name: '跳转节点',
                desc: '通过这个节点\n你可以控制流程跳转到另外一个子流程.  \n也可以控制其跳转到另外的主流程里, 或者跳转到某一个外部链接.',
                img: 'gotoNode.png',
                link: '/doc/node/gotoNode'
            },
            {
                name: '采集节点',
                desc: '这个节点,  \n你可以收集用户输入的内容并保存到一个变量里. 然后,  \n变量里的内容，可以展示在文本答案里，或者用于条件节点里,  \n也可以配合外呼HTTP请求节点，将内容发送给第三方.',
                img: 'collectNode.png',
                link: '/doc/node/collectNode'
            },
            {
                name: '外部HTTP请求节点',
                desc: '使用该节点,  \n可以让流程请求外部的HTTP接口,  \n并发布数据给第三方.  \n如果你需要获取第三方HTTP返回的数据,  \n请使用变量。新建一个变量，并在数据来源一栏里，选择HTTP接口.',
                img: 'externalApiNode.png',
                link: '/doc/node/externalHttpNode'
            },
            {
                name: '邮件发送节点',
                desc: '这个节点可以给一个或多个人发送邮件.  \n你可以选择是同步发送邮件还是异步发送邮件，异步发送邮件不会影响流程的后续执行时间.',
                img: 'sendEmailNode.png',
                link: '/doc/node/sendEmailNode'
            },
            {
                name: '结束节点',
                desc: '该节点表示一个对话流程结束了.',
                img: 'endNode.png',
                link: '/doc/node/theEndNode'
            },
        ]
    },
    howToUse: [{
        timestamp: '#1 准备开始',
        title: '如何快速启动应用, 非常得简单.',
        desc: '[查看教程](/#/doc/tutorial/get-started?lang=zh)',
    }, {
        timestamp: '#2 创建第一个对话流程.',
        title: '挑战在1分钟内配置一个最简单的通知类机器人.',
        desc: '[查看教程](/#/doc/tutorial/simplest-notification-robot?lang=zh)',
    }],
    doc: {
        menu: {
            home: '首页',
            intro: '介绍',
            tutorials: {
                title: '教程',
                getStarted: '准备开始',
                simplestNotificationRobot: '创建简单的通知机器人',
                simplestUserInfoCollectRobot: 'Creating a simplest bot: User information collection bot',
                simplestUserInputCollectRobot: 'Creating a simplest bot: User input collection bot',
            },
            integration: {
                title: '接口集成',
                overview: '整体介绍',
            },
            nodes: {
                title: '功能节点',
                dialogNode: '话术节点',
                llmChatNOde: '大模型聊天节点',
                kbAnswerNode: '知识库问答节点',
                conditionNode: '条件节点',
                collectNode: '采集节点',
                gotoNode: '跳转节点',
                externalHttpNode: '外部HTTP节点',
                sendEmailNode: '发送邮件节点',
                theEndNode: '结束节点',
            },

        }
    },
    tutorial: {
        GetStarted: {
            title: '开始使用.',
            desc: '下载后即可使用, 不需要安装任何依赖, 不需要GPU, 也不需要注册任何账号。',
            steps: [{
                texts: ['**使用编译好的文件**', '#1. 我们从 [Github上的发布页](https://github.com/dialogflowai/dialogflow/releases) 下载.'],
            }, {
                texts: ['#2. 根据不同的系统选择不同的文件来下载'],
                img: 'GetStarted2.png'
            }, {
                texts: [
                    '#3. 我们以 **Linux** 为例.', '下载 dialogflowai-Linux-x86_64.zip',
                    '下载后解压, 然后修改执行权限: `chmod +x dialogflowai`, 启动: `./dialogflowai`',
                    '启动信息如下:',
                    '```\n-->  服务已启动，请用浏览器访问 http://127.0.0.1:12715\nTip: 你可以使用 -ip 和 -port 来自定义监听的IP和端口\n-------\nCurrent version: 1.19.0\nVisiting https://dialogflowai.github.io/ for the latest releases\n-->  Press Ctrl+C to terminate this application\n```',
                    '然后, 使用浏览器访问 http://127.0.0.1:12715 来查看产品界面'
                ],
                img: 'GetStarted3.png'
            }, {
                texts: [
                    '你可以使用 `-ip` 和 `-port` 来修改默认监听的 IP 和端口',
                    '例如: ./dialogflowai -ip 0.0.0.0 -port 8888',
                ],
            }, {
                texts: [
                    '**我们也提供了`Docker` 镜像**, 你可以直接使用 Docker 来启动',
                    '镜像地址：[https://hub.docker.com/r/dialogflowai/dialogflow](https://hub.docker.com/r/dialogflowai/dialogflow)',
                ],
            }, {
                texts: [
                    '你也可以下载源码，自己编译.',
                    '[前端代码](https://github.com/dialogflowai/dialogflow/tree/main/frontend), [后端代码](https://github.com/dialogflowai/dialogflow)',
                ],
            }],
        },
        SimplestNotificationRobot: {
            title: '创建一个最简单的机器人: 通知机器人',
            desc: '只需简单的6步!',
            steps: [{
                texts: ['#1. 选择默认创建好的机器人。'],
                img: 'SimpleNotifyRobot1.png'
            }, {
                texts: ['#2. 点击前往流程列表的链接。'],
                img: 'SimpleNotifyRobot2.png'
            }, {
                texts: ['#3. 选择默认创建好的流程。'],
                img: 'SimpleNotifyRobot3.png'
            }, {
                texts: ['#4. 鼠标拖动The end节点到画布上。'],
                img: 'SimpleNotifyRobot4.png'
            }, {
                texts: ['#5. 双击节点，并在弹出窗填写需要输出的内容。'],
                img: 'SimpleNotifyRobot5.png'
            }, {
                texts: ['#6. 保存并发布。'],
                img: 'SimpleNotifyRobot6.png'
            }, {
                texts: ['----------']
            }, {
                texts: ['我们来测试一下吧!'],
                img: 'SimpleNotifyRobot7.png'
            }, {
                texts: ['最终效果'],
                img: 'SimpleNotifyRobot8.png'
            }],
        }
    }
}