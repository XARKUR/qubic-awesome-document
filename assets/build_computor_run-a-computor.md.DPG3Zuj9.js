import{_ as t,c as e,o as a,a5 as o}from"./chunks/framework.TR9kNvsR.js";const s="/assets/1-20240720063639453.DzTS7Q3o.png",n="/assets/2-20240720063639368.CKtkvZjY.png",i="/assets/3-20240720063639292.1Z-eHF3j.png",p="/assets/4-20240720063639276.DPBBJ2Ak.png",r="/assets/5-20240720063639372.CtCRGXye.png",c="/assets/6-20240720063639164.B9f96w0u.png",l="/assets/7-20240720063639376.CFDqfmXr.png",h="/assets/8-20240720063639480.C6yX8HRF.png",u="/assets/9-20240720063639402.Dcl_mTsD.png",d="/assets/10-20240720063639508.DuMAzEVp.png",g="/assets/11-20240720063639428.BKjjfzc8.png",m="/assets/12-20240720063639300.CU_Wflq1.png",_="/assets/13-20240720063639571.BfkxIUme.png",b="/assets/14-20240720063640075.BsMQhdal.png",f="/assets/25-20240720063639722.E0MN_QnD.png",k="/assets/36-20240720063639703.JjxkYbnm.png",q="/assets/37-20240720063639757.CLz8__eE.png",B="/assets/39-20240720063639804.D_D1MgAt.png",x="/assets/40-20240720063639920.BM7TgjDa.png",C="/assets/41-20240720063640000.QyGbDe6j.png",y="/assets/42-20240720063640175.CEEyfGii.png",v="/assets/43-20240720063640037.aT2ys7JY.png",w="/assets/44-20240720063640120.e9Cp5iZC.png",P="/assets/26-20240720063640386.BCPJMEFu.png",S="/assets/27-20240720063640234.BJLcxI2G.png",D="/assets/28-20240720063640439.DcAcUXVC.png",I="/assets/29-20240720063640308.B8dRKrTy.png",V="/assets/30-20240720063640566.C1vgDQJL.png",X="/assets/31-20240720063640520.BUjZe_L-.png",Q="/assets/32-20240720063640623.Db8eeeRa.png",U="/assets/33-20240720063640698.C0c8OS8U.png",A="/assets/34-20240720063640790.DQhlSnPX.png",E="/assets/35-20240720063640829.DBqNd8o_.png",M="/assets/45-20240720063640901.DAkhmBti.png",T="/assets/46-20240720063641015.BEr7dIt3.png",F="/assets/47-20240720063640949.50x6NH2f.png",Z=JSON.parse('{"title":"Run a Computor","description":"","frontmatter":{},"headers":[],"relativePath":"build/computor/run-a-computor.md","filePath":"build/computor/run-a-computor.md","lastUpdated":null}'),R={name:"build/computor/run-a-computor.md"},N=o('<h1 id="run-a-computor" tabindex="-1">Run a Computor <a class="header-anchor" href="#run-a-computor" aria-label="Permalink to &quot;Run a Computor&quot;">​</a></h1><h2 id="bare-metal-bm" tabindex="-1">Bare Metal (BM) <a class="header-anchor" href="#bare-metal-bm" aria-label="Permalink to &quot;Bare Metal (BM)&quot;">​</a></h2><h3 id="_1-install-visual-studio-and-configure-the-environment" tabindex="-1">1.Install Visual Studio and configure the environment <a class="header-anchor" href="#_1-install-visual-studio-and-configure-the-environment" aria-label="Permalink to &quot;1.Install Visual Studio and configure the environment&quot;">​</a></h3><blockquote><p>Official link: <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noreferrer">visualstudio.microsoft.com</a></p></blockquote><p><img src="'+s+'" alt="1.png"></p><hr><h3 id="_2-download-the-file-and-modify-the-configuration" tabindex="-1">2.Download the file and modify the configuration <a class="header-anchor" href="#_2-download-the-file-and-modify-the-configuration" aria-label="Permalink to &quot;2.Download the file and modify the configuration&quot;">​</a></h3><blockquote><p>Qubic official library: <a href="https://github.com/qubic-network/core" target="_blank" rel="noreferrer">https://github.com/qubic-network/core</a></p></blockquote><p>1.Unzip the downloaded file and use VS Studio to open the <code>Qubic.vcxproj</code> file in the folder.</p><p><img src="'+n+'" alt="2.png"></p><p>2.Select the <code>qubic.cpp</code> file and modify the Private Settings.</p><blockquote><p>For the IPs of knownPublicPeers, you can go to <a href="https://app.qubic.li/network/live" target="_blank" rel="noreferrer">https://app.qubic.li/network/live</a> to select IPs with good health conditions.</p></blockquote><p><img src="'+i+'" alt="3.png"></p><hr><h3 id="_3-optional-skip-cpu-health-check" tabindex="-1">3.(Optional) Skip CPU health check <a class="header-anchor" href="#_3-optional-skip-cpu-health-check" aria-label="Permalink to &quot;3.(Optional) Skip CPU health check&quot;">​</a></h3><p>If your CPU performance is insufficient or the core cannot be correctly identified and is stuck at <code>At least 4 healthy enabled processors are required!</code>, then you can delete the code selected in the picture.</p><p><img src="'+p+'" alt="4.png"></p><hr><h3 id="_4-compile-qubic-efi" tabindex="-1">4.Compile Qubic.EFI <a class="header-anchor" href="#_4-compile-qubic-efi" aria-label="Permalink to &quot;4.Compile Qubic.EFI&quot;">​</a></h3><p>After completing the modification, select Release and press <code>Shift + Ctrl + B</code> to compile.</p><p><img src="'+r+'" alt="5.png"></p><hr><h3 id="_5-create-usb-disk-efi-file" tabindex="-1">5.Create USB disk EFI file <a class="header-anchor" href="#_5-create-usb-disk-efi-file" aria-label="Permalink to &quot;5.Create USB disk EFI file&quot;">​</a></h3><p>1.Create a new folder and extract <code>qubic-initial-disk.zip</code> from the file you downloaded earlier.</p><p><img src="'+c+'" alt="6.png"></p><p>2.Place the generated Qubic.efi file in the boot directory.</p><p><img src="'+l+'" alt="7.png"></p><p><img src="'+h+'" alt="8.png"></p><p>3.Go to the Qubic Discord <a href="https://discord.com/channels/768887649540243497/768890555564163092" target="_blank" rel="noreferrer">#computor-operator</a> channel to get the current epoch file</p><p><img src="'+u+'" alt="9.png"></p><p>The complete file directory should look like the picture.</p><p><img src="'+d+`" alt="10.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/contract.000.XXX</span></span>
<span class="line"><span>/contract.001.XXX</span></span>
<span class="line"><span>/contract.002.XXX</span></span>
<span class="line"><span>/spectrum.XXX</span></span>
<span class="line"><span>/system</span></span>
<span class="line"><span>/universe.XXX</span></span>
<span class="line"><span>/efi/boot</span></span>
<span class="line"><span>/efi/boot/Bootx64.efi</span></span>
<span class="line"><span>/efi/boot/startup.nsh</span></span>
<span class="line"><span>/efi/boot/Qubic.efi</span></span></code></pre></div><p>4.Format the Qubic Boot USB disk as FAT32 with label QUBIC and copy the files of the EFI folder to the USB disk.</p><p><img src="`+g+'" alt="11.png"></p><p><img src="'+m+'" alt="12.png"></p><hr><h3 id="_6-go-to-bios-and-enable-network-stack" tabindex="-1">6.Go to BIOS and enable <code>Network Stack</code> <a class="header-anchor" href="#_6-go-to-bios-and-enable-network-stack" aria-label="Permalink to &quot;6.Go to BIOS and enable `Network Stack`&quot;">​</a></h3><p><img src="'+_+'" alt="13.png"></p><p>After turning on Network Stack, restart the computer and select USB boot.</p><hr><p><img src="'+b+'" alt="14.png"></p><p>When you see this screen, congratulations, you successfully ran Qubic Node!</p><h2 id="virtualbox-vm" tabindex="-1">VirtualBox (VM) <a class="header-anchor" href="#virtualbox-vm" aria-label="Permalink to &quot;VirtualBox (VM)&quot;">​</a></h2><h3 id="_1-installing-virtual-box" tabindex="-1">1.Installing Virtual Box <a class="header-anchor" href="#_1-installing-virtual-box" aria-label="Permalink to &quot;1.Installing Virtual Box&quot;">​</a></h3><p><img src="'+f+'" alt="25.png"></p><blockquote><p><a href="https://www.virtualbox.org/wiki/Download_Old_Builds_6_1" target="_blank" rel="noreferrer">Download_Old_Builds_6_1 – Oracle VM VirtualBox</a></p></blockquote><p>Personally, I prefer version 6.1</p><p>There is nothing extra to note about the installation process, other than which folder you want to install it in.</p><h3 id="_2-preparing-the-boot-disk" tabindex="-1">2.Preparing the boot disk <a class="header-anchor" href="#_2-preparing-the-boot-disk" aria-label="Permalink to &quot;2.Preparing the boot disk&quot;">​</a></h3><p>1.<code>Win + S</code> Search and open Computer Management</p><p><img src="'+k+'" alt="36.png"></p><p>2.Create VHD and Disk</p><p>You need to click on a disk to create a VHD.</p><p><img src="'+q+'" alt="37.png"></p><p>The complete file directory should look like the picture.</p><p><img src="'+B+'" alt="39.png"></p><p><img src="'+x+'" alt="40.png"></p><p><img src="'+C+'" alt="41.png"></p><p><img src="'+y+'" alt="42.png"></p><p><img src="'+v+'" alt="43.png"></p><p>3.Copy the EFI files to the new disk and Eject it</p><blockquote><p><strong>If you don&#39;t know how to create an EFI file, please check here: <a href="https://github.com/XARKUR/Qubic/blob/main/Qubic-Node.md#prerequisites" target="_blank" rel="noreferrer">https://github.com/XARKUR/Qubic/blob/main/Qubic-Node.md#prerequisites</a></strong></p></blockquote><p><img src="'+w+'" alt="44.png"></p><h3 id="_3-virtual-box-configuration" tabindex="-1">3.Virtual Box configuration <a class="header-anchor" href="#_3-virtual-box-configuration" aria-label="Permalink to &quot;3.Virtual Box configuration&quot;">​</a></h3><p>1.Create or Add new Virtual Machine</p><p><img src="'+P+'" alt="26.png"></p><p><img src="'+S+'" alt="27.png"></p><p><img src="'+D+'" alt="28.png"></p><p><img src="'+I+'" alt="29.png"></p><p><img src="'+V+'" alt="30.png"></p><p>2.Virtual Machine Setting</p><p>Least 128 RAM and 8 Cores CPU</p><p><img src="'+X+'" alt="31.png"></p><p><img src="'+Q+'" alt="32.png"></p><p><img src="'+U+'" alt="33.png"></p><p><img src="'+A+'" alt="34.png"></p><p><img src="'+E+'" alt="35.png"></p><p><img src="'+M+'" alt="45.png"></p><p><img src="'+T+'" alt="46.png"></p><p>GO! You successfully ran Qubic Node!</p><p><img src="'+F+'" alt="47.png"></p>',82),O=[N];function j(G,J,z,H,K,L){return a(),e("div",null,O)}const $=t(R,[["render",j]]);export{Z as __pageData,$ as default};