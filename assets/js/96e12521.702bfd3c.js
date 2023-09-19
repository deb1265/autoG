"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",authors:"sonichi",tags:["LLM","GPT","research"]},s=void 0,l={permalink:"/autogen/blog/2023/04/21/LLM-tuning-math",source:"@site/blog/2023-04-21-LLM-tuning-math/index.mdx",title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",description:"level 2 algebra",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:5.015,truncated:!1,authors:[{name:"Chi Wang",title:"Principal Researcher at Microsoft Research",url:"https://www.linkedin.com/in/chi-wang-49b15b16/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],prevItem:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",permalink:"/autogen/blog/2023/05/18/GPT-adaptive-humaneval"}},i={authorsImageUrls:[void 0]},p=[{value:"Experiment Setup",id:"experiment-setup",children:[],level:2},{value:"Experiment Results",id:"experiment-results",children:[],level:2},{value:"Analysis and Discussion",id:"analysis-and-discussion",children:[],level:2},{value:"For Further Reading",id:"for-further-reading",children:[],level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"level 2 algebra",src:a(9207).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Just by tuning the inference parameters like model, number of responses, temperature etc. without changing any model weights or prompt, the baseline accuracy of untuned gpt-4 can be improved by 20% in high school math competition problems.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For easy problems, the tuned gpt-3.5-turbo model vastly outperformed untuned gpt-4 in accuracy (e.g., 90% vs. 70%) and cost efficiency. For hard problems, the tuned gpt-4 is much more accurate (e.g., 35% vs. 20%) and less expensive than untuned gpt-4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AutoGen can help with model selection, parameter tuning, and cost-saving in LLM applications."))),(0,r.kt)("p",null,"Large language models (LLMs) are powerful tools that can generate natural language texts for various applications, such as chatbots, summarization, translation, and more. GPT-4 is currently the state of the art LLM in the world. Is model selection irrelevant? What about inference parameters?"),(0,r.kt)("p",null,"In this blog post, we will explore how model and inference parameter matter in LLM applications, using a case study for ",(0,r.kt)("a",{parentName:"p",href:"https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html"},"MATH"),", a benchmark for evaluating LLMs on advanced mathematical problem solving. MATH consists of 12K math competition problems from AMC-10, AMC-12 and AIME. Each problem is accompanied by a step-by-step solution."),(0,r.kt)("p",null,"We will use AutoGen to automatically find the best model and inference parameter for LLMs on a given task and dataset given an inference budget, using a novel low-cost search & pruning strategy. AutoGen currently supports all the LLMs from OpenAI, such as GPT-3.5 and GPT-4."),(0,r.kt)("p",null,"We will use AutoGen to perform model selection and inference parameter tuning. Then we compare the performance and inference cost on solving algebra problems with the untuned gpt-4. We will also analyze how different difficulty levels affect the results."),(0,r.kt)("h2",{id:"experiment-setup"},"Experiment Setup"),(0,r.kt)("p",null,"We use AutoGen to select between the following models with a target inference budget $0.02 per instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gpt-3.5-turbo, a relatively cheap model that powers the popular ChatGPT app"),(0,r.kt)("li",{parentName:"ul"},"gpt-4, the state of the art LLM that costs more than 10 times of gpt-3.5-turbo")),(0,r.kt)("p",null,"We adapt the models using 20 examples in the train set, using the problem statement as the input and generating the solution as the output. We use the following inference parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"temperature: The parameter that controls the randomness of the output text. A higher temperature means more diversity but less coherence. We search for the optimal temperature in the range of ","[0, 1]","."),(0,r.kt)("li",{parentName:"ul"},"top_p: The parameter that controls the probability mass of the output tokens. Only tokens with a cumulative probability less than or equal to top-p are considered. A lower top-p means more diversity but less coherence. We search for the optimal top-p in the range of ","[0, 1]","."),(0,r.kt)("li",{parentName:"ul"},"max_tokens: The maximum number of tokens that can be generated for each output. We search for the optimal max length in the range of ","[50, 1000]","."),(0,r.kt)("li",{parentName:"ul"},"n: The number of responses to generate. We search for the optimal n in the range of ","[1, 100]","."),(0,r.kt)("li",{parentName:"ul"},'prompt: We use the template: "{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in ',"\\",'boxed{{}}." where {problem} will be replaced by the math problem instance.')),(0,r.kt)("p",null,"In this experiment, when n > 1, we find the answer with highest votes among all the responses and then select it as the final answer to compare with the ground truth. For example, if n = 5 and 3 of the responses contain a final answer 301 while 2 of the responses contain a final answer 159, we choose 301 as the final answer. This can help with resolving potential errors due to randomness. We use the average accuracy and average inference cost as the metric to evaluate the performance over a dataset. The inference cost of a particular instance is measured by the price per 1K tokens and the number of tokens consumed."),(0,r.kt)("h2",{id:"experiment-results"},"Experiment Results"),(0,r.kt)("p",null,"The first figure in this blog post shows the average accuracy and average inference cost of each configuration on the level 2 Algebra test set."),(0,r.kt)("p",null,"Surprisingly, the tuned gpt-3.5-turbo model is selected as a better model and it vastly outperforms untuned gpt-4 in accuracy (92% vs. 70%) with equal or 2.5 times higher inference budget.\nThe same observation can be obtained on the level 3 Algebra test set."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"level 3 algebra",src:a(8305).Z})),(0,r.kt)("p",null,"However, the selected model changes on level 4 Algebra."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"level 4 algebra",src:a(816).Z})),(0,r.kt)("p",null,"This time gpt-4 is selected as the best model. The tuned gpt-4 achieves much higher accuracy (56% vs. 44%) and lower cost than the untuned gpt-4.\nOn level 5 the result is similar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"level 5 algebra",src:a(3453).Z})),(0,r.kt)("p",null,"We can see that AutoGen has found different optimal model and inference parameters for each subset of a particular level, which shows that these parameters matter in cost-sensitive LLM applications and need to be carefully tuned or adapted."),(0,r.kt)("p",null,"An example notebook to run these experiments can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/autogen_chatgpt.ipynb"},"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/autogen_chatgpt.ipynb"),". The experiments were run when AutoGen was a subpackage in FLAML."),(0,r.kt)("h2",{id:"analysis-and-discussion"},"Analysis and Discussion"),(0,r.kt)("p",null,"While gpt-3.5-turbo demonstrates competitive accuracy with voted answers in relatively easy algebra problems under the same inference budget, gpt-4 is a better choice for the most difficult problems. In general, through parameter tuning and model selection, we can identify the opportunity to save the expensive model for more challenging tasks, and improve the overall effectiveness of a budget-constrained system."),(0,r.kt)("p",null,"There are many other alternative ways of solving math problems, which we have not covered in this blog post. When there are choices beyond the inference parameters, they can be generally tuned via ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function"},(0,r.kt)("inlineCode",{parentName:"a"},"flaml.tune")),"."),(0,r.kt)("p",null,"The need for model selection, parameter tuning and cost saving is not specific to the math problems. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Significant-Gravitas/Auto-GPT"},"Auto-GPT")," project is an example where high cost can easily prevent a generic complex task to be accomplished as it needs many LLM inference calls."),(0,r.kt)("h2",{id:"for-further-reading"},"For Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2303.04673"},"Research paper about the tuning technique")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Use-Cases/enhanced_inference"},"Documentation about inference tuning"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do you have any experience to share about LLM applications? Do you like to see more support or research of LLM optimization or automation? Please join our ",(0,r.kt)("a",{parentName:"em",href:"https://discord.gg/be44TCXGpe"},"Discord")," server for discussion.")))}u.isMDXComponent=!0},9207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/level2algebra-659ba95286432d9945fc89e84d606797.png"},8305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/level3algebra-94e87a683ac8832ac7ae6f41f30131a4.png"},816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/level4algebra-492beb22490df30d6cc258f061912dcd.png"},3453:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/level5algebra-8fba701551334296d08580b4b489fe56.png"}}]);