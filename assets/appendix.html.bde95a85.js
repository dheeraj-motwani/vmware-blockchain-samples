import{_ as o,r as c,o as i,c as s,a as e,b as a,d as n,e as r}from"./app.2e8a60a9.js";const l={},d=r('<h1 id="appendix" tabindex="-1"><a class="header-anchor" href="#appendix" aria-hidden="true">#</a> Appendix</h1><h2 id="connecting-metamask-to-vmware-blockchain" tabindex="-1"><a class="header-anchor" href="#connecting-metamask-to-vmware-blockchain" aria-hidden="true">#</a> Connecting Metamask to VMware Blockchain</h2><p>Metamask is available on Google Chrome as an extension, and this is a key requirement to this NFT sample.</p><p>If you have never added your VMware Blockchain&#39;s URL and the Chain ID (default 5000) as a separate network on Metamask, you can click on user profile picture to open the dropdown menu and click <code>Settings</code> &gt; <code>Networks</code> &gt; <code>Add Network</code> &gt; <code>Add Network Manually</code> and provide:</p><ul><li>Network Name: (Can be freely chosen)</li><li>New RPC URL: (Your blockchain&#39;s EthRPC URL aka. <code>VMBC_URL</code>)</li><li>Chain ID: (Your blockchain&#39;s <code>chainId</code>, default is usually 5000)</li><li>Currency Symbol: (Can be freely chosen)</li><li>Block explorer URL: (optional)</li></ul><p>Metamask might not have connected ever on localhost:4200 site, if this is the case, you can connect Metamask to the dev site by clicking on <code>Not Connected</code> status icon and clicking <code>Connect</code></p><h2 id="resetting-account-in-metamask" tabindex="-1"><a class="header-anchor" href="#resetting-account-in-metamask" aria-hidden="true">#</a> Resetting Account in Metamask</h2>',7),h={href:"https://metamask.zendesk.com/hc/en-us/articles/360015488891-How-to-reset-an-account",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"Perform this step of Resetting you Metamask account for each of the accounts which you will utilize to interact with VMware Blockchain"),e("li",null,[e("strong",null,"Note"),a(": This is required because of a Limitation in Metamask that, when an already connected/linked Blockchain Network is reset/re-installed, Metamask still uses old and cached nonce for accounts. Essentially, by resetting the accounts, we are requesting Metamask to dynamically determine the nonce, rather than using an old cache.")])],-1),m=e("h2",{id:"importing-accounts-in-metamask",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#importing-accounts-in-metamask","aria-hidden":"true"},"#"),a(" Importing Accounts in Metamask")],-1),k={href:"https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-account",target:"_blank",rel:"noopener noreferrer"};function p(f,_){const t=c("ExternalLinkIcon");return i(),s("div",null,[d,e("ul",null,[e("li",null,[a("How to Reset an Account in Metamask - "),e("a",h,[a("Article from Metamask"),n(t)]),u])]),m,e("ul",null,[e("li",null,[a("How to Import Accounts in Metamask - "),e("a",k,[a("Article from Metamask"),n(t)])])])])}const w=o(l,[["render",p],["__file","appendix.html.vue"]]);export{w as default};
