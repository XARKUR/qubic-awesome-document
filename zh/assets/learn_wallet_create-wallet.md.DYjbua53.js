import{_ as a,c as e,o as t,a5 as l}from"./chunks/framework.Dc8iq2K4.js";const r="/zh/assets/image-20240719071359368.BKDMJai_.png",i="/zh/assets/image-20240719071451402.BUj8CMJP.png",o="/zh/assets/image-20240719072111035.GU7prcrc.png",k=JSON.parse('{"title":"创建钱包","description":"","frontmatter":{},"headers":[],"relativePath":"learn/wallet/create-wallet.md","filePath":"learn/wallet/create-wallet.md","lastUpdated":null}'),s={name:"learn/wallet/create-wallet.md"},c=l('<h1 id="创建钱包" tabindex="-1">创建钱包 <a class="header-anchor" href="#创建钱包" aria-label="Permalink to &quot;创建钱包&quot;">​</a></h1><h2 id="官方钱包" tabindex="-1">官方钱包 <a class="header-anchor" href="#官方钱包" aria-label="Permalink to &quot;官方钱包&quot;">​</a></h2><ul><li><strong>网页钱包</strong>: <a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">Qubic - Wallet</a></li><li><strong>IOS 钱包</strong>: <a href="https://apps.apple.com/us/app/qubic-wallet/id6502265811" target="_blank" rel="noreferrer">IOS Wallet</a></li></ul><p><a href="https://medium.com/@peterrb/how-to-use-the-new-ios-qubic-wallet-a-simple-guide-723d55fb0c7d" target="_blank" rel="noreferrer">全新 iOS Qubic 钱包的使用攻略：从入门到精通</a></p><h2 id="社区钱包" tabindex="-1">社区钱包 <a class="header-anchor" href="#社区钱包" aria-label="Permalink to &quot;社区钱包&quot;">​</a></h2><ul><li><strong>Windows 桌面钱包</strong>: <a href="https://github.com/Qubic-Hub/qubic-wallet" target="_blank" rel="noreferrer">Qubic-Hub</a></li><li><strong>安卓钱包</strong>: <a href="https://github.com/Qubic-Hub/qubic-wallet" target="_blank" rel="noreferrer">Qubic-Hub</a></li><li><strong>网页拓展钱包</strong>: <a href="https://github.com/Mineco1006/qsol-extension" target="_blank" rel="noreferrer">Qsol-Extension</a></li></ul><h2 id="开发中" tabindex="-1">开发中 <a class="header-anchor" href="#开发中" aria-label="Permalink to &quot;开发中&quot;">​</a></h2><ul><li>Metamask Snap 钱包</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>注意事项：当前，在 MetaMask 的钱包内的全部 $QUBIC 代币均为骗局。</p><p>MetaMask 钱包的具体上线时间尚未确定，请持续关注社区发布的信息以获得最新动态。</p></div><ul><li>Tangem Wallet</li><li>Heat Wallet</li></ul><h2 id="如何创建钱包" tabindex="-1">如何创建钱包？ <a class="header-anchor" href="#如何创建钱包" aria-label="Permalink to &quot;如何创建钱包？&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>所有以下教程均为<a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">官方网页钱包</a>。</p></div><ol><li>打开<a href="https://wallet.qubic.org/" target="_blank" rel="noreferrer">官方网页钱包</a>和输入你的金库名称。</li><li>为你的地址添加一个名字，并选择<strong>随机种子</strong>来生成你的地址。</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>这55位字符是你的 Qubic 地址私钥（种子）！ 请将此种子保存在安全的位置。 若未备份种子，你可能会丢失资金！</p><p>强烈建议不要使用自定义的种子，因为这样做会增加被黑客盗取的风险！！！</p></div><ol start="3"><li>在确保安全的前提下，设定一个强有力的密码，并将 Vault 文件进行下载和妥善保存。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Vault 文件存储你的钱包地址相关的所有信息，并对其进行加密。使用密码来验证并解锁文件。如果你的钱包包含多个地址，它们都将保存在 Vault 文件中。</p></div><ol start="4"><li>输入你在上一步设置的密码，并导入 Vault 文件进行验证。</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>每次更新你的钱包（例如：添加或编辑地址），你将被提示下载最新的 Vault 文件，请记得更新并保存该文件。</p></div><ol start="5"><li>创建完成，成功进入钱包页面。</li></ol><h4 id="忘记保存种子" tabindex="-1">忘记保存种子？ <a class="header-anchor" href="#忘记保存种子" aria-label="Permalink to &quot;忘记保存种子？&quot;">​</a></h4><ol><li>首先点击右上角的锁形图标，输入密码并导入 Vault 文件以解锁。</li></ol><p><img src="'+r+'" alt="image-20240719071359368"></p><ol start="2"><li>点击地址信息内的“眼睛”图标，点击打开后就可以可以看到公共ID的地址和 55 位字符的种子。</li></ol><p><img src="'+i+'" alt="image-20240719071451402"></p><p><img src="'+o+'" alt="image-20240719072111035"></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>再次强调，这 55 位字符的种子非常重要，等同于地址的私钥，请不要随意告诉他人，并妥善保存。</strong></p></div><h2 id="钱包安全性" tabindex="-1">钱包安全性 <a class="header-anchor" href="#钱包安全性" aria-label="Permalink to &quot;钱包安全性&quot;">​</a></h2><h4 id="k12-哈希算法" tabindex="-1">K12 哈希算法 <a class="header-anchor" href="#k12-哈希算法" aria-label="Permalink to &quot;K12 哈希算法&quot;">​</a></h4><p>Qubic 采用 Keccak 团队设计的 K12 算法来进行其加密操作，相比传统的 SHA-256 等算法，K12 在速度和安全性上更加优越。通过将字母数字种子转换为具有高随机性的私钥，从而达到强化加密安全的目的。这一策略确保了每个生成的私钥不仅独特而且具备强大的抗暴力破解能力。</p><h4 id="密钥和地址生成" tabindex="-1">密钥和地址生成 <a class="header-anchor" href="#密钥和地址生成" aria-label="Permalink to &quot;密钥和地址生成&quot;">​</a></h4><p>Qubic 系统采用一个由 55 个小写字母组合而成的种子作为基础来生成 256 比特位的私钥，通过 K12 哈希算法完成。根据私钥，我们使用 FourQ 曲线与标准的椭圆曲线乘法运算（ecc_mul_fixed）结合进行签名处理，从而得到公钥。FourQ 曲线在确保系统加密安全方面发挥了巨大作用，因为它提供了当前最高效且最安全的椭圆曲线之一。这使得我们的数字签名过程不仅更加快速，而且也更为稳固可靠。</p>',31),n=[c];function u(p,h,d,b,m,g){return t(),e("div",null,n)}const f=a(s,[["render",u]]);export{k as __pageData,f as default};