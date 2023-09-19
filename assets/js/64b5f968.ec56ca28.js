"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),_=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=_(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=_(r),d=l,p=m["".concat(a,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var _=2;_<o;_++)i[_]=r[_];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9594:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=r(7462),l=(r(7294),r(3905));const o={sidebar_label:"retrieve_utils",title:"retrieve_utils"},i=void 0,s={unversionedId:"reference/retrieve_utils",id:"reference/retrieve_utils",isDocsHomePage:!1,title:"retrieve_utils",description:"num\\tokens\\from\\_text",source:"@site/docs/reference/retrieve_utils.md",sourceDirName:"reference",slug:"/reference/retrieve_utils",permalink:"/autogen/docs/reference/retrieve_utils",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/retrieve_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"retrieve_utils",title:"retrieve_utils"},sidebar:"referenceSideBar",previous:{title:"math_utils",permalink:"/autogen/docs/reference/math_utils"}},a=[{value:"num_tokens_from_text",id:"num_tokens_from_text",children:[],level:4},{value:"num_tokens_from_messages",id:"num_tokens_from_messages",children:[],level:4},{value:"split_text_to_chunks",id:"split_text_to_chunks",children:[],level:4},{value:"split_files_to_chunks",id:"split_files_to_chunks",children:[],level:4},{value:"get_files_from_dir",id:"get_files_from_dir",children:[],level:4},{value:"get_file_from_url",id:"get_file_from_url",children:[],level:4},{value:"is_url",id:"is_url",children:[],level:4},{value:"create_vector_db_from_dir",id:"create_vector_db_from_dir",children:[],level:4},{value:"query_vector_db",id:"query_vector_db",children:[],level:4}],_={toc:a};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"num_tokens_from_text"},"num","_","tokens","_","from","_","text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def num_tokens_from_text(\n    text: str,\n    model: str = "gpt-3.5-turbo-0613",\n    return_tokens_per_name_and_message: bool = False\n) -> Union[int, Tuple[int, int, int]]\n')),(0,l.kt)("p",null,"Return the number of tokens used by a text."),(0,l.kt)("h4",{id:"num_tokens_from_messages"},"num","_","tokens","_","from","_","messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def num_tokens_from_messages(messages: dict,\n                             model: str = "gpt-3.5-turbo-0613")\n')),(0,l.kt)("p",null,"Return the number of tokens used by a list of messages."),(0,l.kt)("h4",{id:"split_text_to_chunks"},"split","_","text","_","to","_","chunks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def split_text_to_chunks(text: str,\n                         max_tokens: int = 4000,\n                         chunk_mode: str = "multi_lines",\n                         must_break_at_empty_line: bool = True,\n                         overlap: int = 10)\n')),(0,l.kt)("p",null,"Split a long text into chunks of max_tokens."),(0,l.kt)("h4",{id:"split_files_to_chunks"},"split","_","files","_","to","_","chunks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def split_files_to_chunks(files: list,\n                          max_tokens: int = 4000,\n                          chunk_mode: str = "multi_lines",\n                          must_break_at_empty_line: bool = True)\n')),(0,l.kt)("p",null,"Split a list of files into chunks of max_tokens."),(0,l.kt)("h4",{id:"get_files_from_dir"},"get","_","files","_","from","_","dir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_files_from_dir(dir_path: str,\n                       types: list = TEXT_FORMATS,\n                       recursive: bool = True)\n")),(0,l.kt)("p",null,"Return a list of all the files in a given directory."),(0,l.kt)("h4",{id:"get_file_from_url"},"get","_","file","_","from","_","url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_file_from_url(url: str, save_path: str = None)\n")),(0,l.kt)("p",null,"Download a file from a URL."),(0,l.kt)("h4",{id:"is_url"},"is","_","url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_url(string: str)\n")),(0,l.kt)("p",null,"Return True if the string is a valid URL."),(0,l.kt)("h4",{id:"create_vector_db_from_dir"},"create","_","vector","_","db","_","from","_","dir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def create_vector_db_from_dir(dir_path: str,\n                              max_tokens: int = 4000,\n                              client: API = None,\n                              db_path: str = "/tmp/chromadb.db",\n                              collection_name: str = "all-my-documents",\n                              get_or_create: bool = False,\n                              chunk_mode: str = "multi_lines",\n                              must_break_at_empty_line: bool = True,\n                              embedding_model: str = "all-MiniLM-L6-v2")\n')),(0,l.kt)("p",null,"Create a vector db from all the files in a given directory."),(0,l.kt)("h4",{id:"query_vector_db"},"query","_","vector","_","db"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def query_vector_db(\n        query_texts: List[str],\n        n_results: int = 10,\n        client: API = None,\n        db_path: str = "/tmp/chromadb.db",\n        collection_name: str = "all-my-documents",\n        search_string: str = "",\n        embedding_model: str = "all-MiniLM-L6-v2") -> Dict[str, List[str]]\n')),(0,l.kt)("p",null,"Query a vector db."))}u.isMDXComponent=!0}}]);