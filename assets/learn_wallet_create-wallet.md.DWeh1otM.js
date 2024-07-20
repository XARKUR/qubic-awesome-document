import{_ as e,c as a,o as t,a5 as l}from"./chunks/framework.TR9kNvsR.js";const r="/assets/image-20240719071359368.BKDMJai_.png",o="/assets/image-20240719071451402.BUj8CMJP.png",i="/assets/image-20240719072111035.GU7prcrc.png",y=JSON.parse('{"title":"Create Wallet","description":"","frontmatter":{},"headers":[],"relativePath":"learn/wallet/create-wallet.md","filePath":"learn/wallet/create-wallet.md","lastUpdated":null}'),s={name:"learn/wallet/create-wallet.md"},n=l('<h1 id="create-wallet" tabindex="-1">Create Wallet <a class="header-anchor" href="#create-wallet" aria-label="Permalink to &quot;Create Wallet&quot;">​</a></h1><h2 id="official-wallet" tabindex="-1">Official Wallet <a class="header-anchor" href="#official-wallet" aria-label="Permalink to &quot;Official Wallet&quot;">​</a></h2><ul><li><strong>Web Wallet</strong>: <a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">Qubic - Wallet</a></li><li><strong>IOS Wallet</strong>: <a href="https://apps.apple.com/us/app/qubic-wallet/id6502265811" target="_blank" rel="noreferrer">IOS Wallet</a></li></ul><p><a href="https://medium.com/@peterrb/how-to-use-the-new-ios-qubic-wallet-a-simple-guide-723d55fb0c7d" target="_blank" rel="noreferrer">How to Use the New iOS Qubic Wallet: A Step-by-Step Guide</a></p><h2 id="community-wallet" tabindex="-1">Community Wallet <a class="header-anchor" href="#community-wallet" aria-label="Permalink to &quot;Community Wallet&quot;">​</a></h2><ul><li><strong>Windows Desktop Wallet</strong>: <a href="https://github.com/Qubic-Hub/qubic-wallet" target="_blank" rel="noreferrer">Qubic-Hub</a></li><li><strong>Android Wallet</strong>: <a href="https://github.com/Qubic-Hub/qubic-wallet" target="_blank" rel="noreferrer">Qubic-Hub</a></li><li><strong>Web Extension Wallet</strong>: <a href="https://github.com/Mineco1006/qsol-extension" target="_blank" rel="noreferrer">Qsol-Extension</a></li></ul><h2 id="in-development" tabindex="-1">In development <a class="header-anchor" href="#in-development" aria-label="Permalink to &quot;In development&quot;">​</a></h2><ul><li>Metamask Snap Wallet</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Be aware that all QUBIC tokens on Metamask wallets are currently scams! The completion date for Metamask wallets is unknown at this time. Please keep an eye on community announcements for updates.</p></div><ul><li>Tangem Wallet</li><li>Heat Wallet</li></ul><h2 id="how-to-create-a-wallet" tabindex="-1">How to create a wallet? <a class="header-anchor" href="#how-to-create-a-wallet" aria-label="Permalink to &quot;How to create a wallet?&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>All the following tutorials use the <a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">Official Web Wallet</a>.</p></div><ol><li>Open <a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">Official Web Wallet</a> and enter the name of your vault.</li><li>Add a name for your address and use a <strong>random seed</strong> to generate a Public ID.</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>This 55-Chars are your Qubic Private Key (Seed)! Save/store this seed at secure location. You may lose your funds if you do not have your seed(s) in backup!</strong></p><p><strong>It is strongly advised against using custom seeds, as doing so increases the risk of them being stolen by hackers!!!</strong></p></div><ol start="3"><li>Create a strong password and download the Vault file, storing it securely.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Vault file stores all the information related to your wallet addresses and encrypts it. Password is used to verify and unlock the file. If your wallet contains multiple addresses, they will all be saved within the Vault file.</p></div><ol start="4"><li>Enter the password you set in the previous step and import the Vault file for verification.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Every time you update your Wallet (e.g. add or edit an address), you will be prompted to download the newest Vault file, remember to update and save the file.</p></div><ol start="5"><li>Creation is finished, enjoy!</li></ol><h4 id="forgot-to-save-55-char-seeds" tabindex="-1">Forgot to save 55-char seeds? <a class="header-anchor" href="#forgot-to-save-55-char-seeds" aria-label="Permalink to &quot;Forgot to save 55-char seeds?&quot;">​</a></h4><ol><li>First click the lock icon in the upper right corner, input password and import Vault file to unlock.</li></ol><p><img src="'+r+'" alt="image-20240719071359368"></p><ol start="2"><li>Click the eye icon within the address information, click open after you can see your address of the Public ID and 55-char seed.</li></ol><p><img src="'+o+'" alt="image-20240719071451402"></p><p><img src="'+i+'" alt="image-20240719072111035"></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>Again reiterate, this 55-char seed is very important, is equivalent to the address private key, please do not casually tell others and properly save.</strong></p></div><h2 id="wallet-security" tabindex="-1">Wallet Security <a class="header-anchor" href="#wallet-security" aria-label="Permalink to &quot;Wallet Security&quot;">​</a></h2><h4 id="k12-hash-algorithm" tabindex="-1">K12 Hash Algorithm <a class="header-anchor" href="#k12-hash-algorithm" aria-label="Permalink to &quot;K12 Hash Algorithm&quot;">​</a></h4><p>Qubic utilizes the K12 algorithm, developed by the Keccak team (creators of SHA-3), for its cryptographic operations. This algorithm was chosen for its robustness and superior speed compared to traditional algorithms such as SHA-256. The K12 algorithm is used to transform an alphanumeric seed into a high entropy private key, which is critical for cryptographic security. This approach guarantees the uniqueness of each private key and its resistance to brute force attacks.</p><h4 id="key-and-address-generation" tabindex="-1">Key and Address Generation <a class="header-anchor" href="#key-and-address-generation" aria-label="Permalink to &quot;Key and Address Generation&quot;">​</a></h4><p>The Qubic system uses a 55-character lowercase alphanumeric seed to generate 256-bit private keys using the K12 hash algorithm. From the private key, the public key is generated by a standard elliptic curve multiplication operation (ecc_mul_fixed) using the FourQ curve for signing. The FourQ curve significantly strengthens the cryptographic security of the system by providing one of the most efficient and secure elliptic curves available, enabling faster and more secure digital signatures.</p>',31),c=[n];function d(h,u,p,m,g,f){return t(),a("div",null,c)}const k=e(s,[["render",d]]);export{y as __pageData,k as default};
