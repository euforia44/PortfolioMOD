module.exports = {
  name: "Portfolio Mod",
  displayName: "Portfolio Mod",
  section: "Canwas",
  author: "euforia.44",
  version: "5.0.3",
  short_description: "Generatora Portfolio.",

  subtitle(data) {
    return "Generuje grafikę i wysyła ją jako nową wiadomość na kanale.";
  },

  fields: [
    // Settings 1
    "requiredRoleID", "embedTitle", "embedDesc", "embedColor",
    "realizatorField", "dlaKogoField", "secondMessageImageURL",
    // Settings 2
    "mainText", "fontPath", "fontSize", "fontColor", "textYPosition",
    // Obrazy
    "topLayerImageURL", "mainImageScale", "cornerRadius", 
    "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "backgroundImageURL"
  ],

  html(isEvent, data) {
    return `
      <div style="padding: 10px;">
        <tab-system>
          <tab label="Tutorial" icon="info circle">
            <div style="padding: 10px; font-size: 13px;">
              <div class="ui red message" style="padding: 10px; margin-bottom: 15px;">
                  <b>Wymagania:</b> Aby ten mod zadziałał, musisz otworzyć konsolę (CMD) w folderze swojego bota i wpisać komendę: <code style="background: #2c2c2c; padding: 2px 5px; border-radius: 3px;">npm i canvas</code>
              </div>
              <p style="margin-bottom: 10px;"><b>Krok 1: Konfiguracja Komendy Slash</b><br>
              Stwórz komendę (np. /portfolio) z parametrami:<br>
              • <b>Wykonawca</b> (Typ: <code>User</code>)<br>
              • <b>dla kogo</b> (Typ: <code>User</code>)<br>
              • <b style="color: #ff5555;">zalacznik</b> (Typ: <code>Attachment</code>) <span style="font-size: 12px; color: #888;">(nazwa musi być dokładnie "zalacznik")</span>
              </p>
              <div class="ui green message" style="padding: 8px; margin-top: 10px; font-size: 12px;">
                <b>Info:</b> Mod generuje grafikę <b>1920x1080px</b> i jest w pełni zautomatyzowany.
              </div>
            </div>
          </tab>

          <tab label="Settings 1" icon="cogs">
            <div style="padding: 10px;">
                <div style="width: 100%; margin-bottom: 12px;">
                    <label>ID Roli z Uprawnieniami (zostaw puste, aby wszyscy mogli używać)</label>
                    <input id="requiredRoleID" class="round" type="text" placeholder="Wklej tutaj ID roli...">
                </div>
                <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                    <div style="width: 60%;"><label>Tytuł Embedu</label><input id="embedTitle" class="round" type="text" value="PORTFOLIO"></div>
                    <div style="width: 40%;"><label>Kolor Embedu</label><input id="embedColor" class="round" type="text" value="#ea29d1"></div>
                </div>
                <div style="margin-bottom: 12px;">
                  <label>Opis Embedu</label><textarea id="embedDesc" class="round" rows="2" style="width: 100%; resize: vertical;">Nowa praca już wleciała! Podoba się? Zostaw reakcję!</textarea>
                </div>
                <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                    <div style="width: 50%;"><label>Pole "Wykonane przez"</label><input id="realizatorField" class="round" type="text" value="\${slashParams('Wykonawca')}"></div>
                    <div style="width: 50%;"><label>Pole "Dla kogo"</label><input id="dlaKogoField" class="round" type="text" value="\${slashParams('dlakogo')}"></div>
                </div>
                <div style="margin-bottom: 12px;">
                    <label>URL Obrazu w drugiej wiadomości</label>
                    <input id="secondMessageImageURL" class="round" type="text" value="https://cdn.discordapp.com/attachments/1384134507980132412/1384134863233351763/evbannero.png?ex=686b08cb&is=6869b74b&hm=9459b6761bfcc2e807fa0a8d1dadd34990d8a23fbff3ad9716cde3c2a9e2ec4d&">
                </div>
            </div>
          </tab>

          <tab label="Settings 2" icon="font">
            <div style="padding: 10px;">
              <label>Tekst na Obrazie</label>
              <input id="mainText" class="round" type="text" value="GRAFIKA" style="margin-bottom: 8px;">
              <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                <div style="flex-grow: 1;"><label>Czcionka</label><input id="fontPath" class="round" type="text" value="fonts\\proxima.otf"></div>
                <div style="width: 90px;"><label>Rozmiar</label><input id="fontSize" class="round" type="number" value="180"></div>
                <div style="width: 90px;"><label>Kolor</label><input id="fontColor" class="round" type="text" value="#FFFFFF"></div>
              </div>
              <label>Pozycja Tekstu w Pionie (Y)</label>
              <input id="textYPosition" class="round" type="number" value="160">
            </div>
          </tab>

          <tab label="Obraz" icon="image">
            <div style="padding: 10px;">
              <div style="margin-bottom: 15px;"><label><b>Warstwa 1 (Dodatkowa, np. ramka)</b></label><input id="topLayerImageURL" class="round" type="text" placeholder="Domyślnie puste"></div>
              <div style="margin-bottom: 15px;">
                <p style="font-size: 13px;"><b>Warstwa 2 (Główna grafika)</b> jest pobierana automatycznie z parametru "zalacznik" komendy slash.</p>
                <div style="display: flex; gap: 10px; margin-top: 8px;">
                  <div style="width: 50%;"><label>Maks. Rozmiar (skala %)</label><input id="mainImageScale" class="round" type="number" value="60"></div>
                  <div style="width: 50%;"><label>Zaokrąglenie (px)</label><input id="cornerRadius" class="round" type="number" value="50"></div>
                </div>
                <div style="margin-top: 8px;"><label><b>Cień dla Warstwy 2</b></label></div>
                <div style="display: flex; gap: 10px;">
                  <div style="width: 25%;"><label>Kolor</label><input id="shadowColor" class="round" type="text" value="#000000"></div>
                  <div style="width: 25%;"><label>Rozmycie</label><input id="shadowBlur" class="round" type="number" value="15"></div>
                  <div style="width: 25%;"><label>Offset X</label><input id="shadowOffsetX" class="round" type="number" value="0"></div>
                  <div style="width: 25%;"><label>Offset Y</label><input id="shadowOffsetY" class="round" type="number" value="10"></div>
                </div>
              </div>
              <div><label><b>Warstwa 3 (Tło)</b></label><input id="backgroundImageURL" class="round" type="text" value="https://cdn.discordapp.com/attachments/1384134507980132412/1391228184007282820/tloportfolio.png?ex=686b21b6&is=6869d036&hm=62d9d0ca73b3bd1428f65ac1f425de097c36c73dcdafc7e118ce9c48347c69fb&"></div>
            </div>
          </tab>
        </tab-system>
      </div>
    `;
  },

  async action(cache) {
    const { AttachmentBuilder, EmbedBuilder, MessageFlags } = require("discord.js");
    const Canvas = require("canvas");
    const path = require("path");

    const data = cache.actions[cache.index];
    const getVal = (field) => this.evalMessage(data[field], cache);
    const { interaction, channel } = cache;

    const isInteraction = interaction && typeof interaction.deferReply === 'function';
    if (isInteraction) {
      try {
        if (!interaction.deferred && !interaction.replied) {
          await interaction.deferReply({ flags: MessageFlags.Ephemeral });
        }
      } catch (e) { console.error("Portfolio Mod: Nie udało się odroczyć odpowiedzi.", e.message); }
    }
    
    const requiredRoleID = getVal("requiredRoleID");
    if (requiredRoleID && interaction.member) {
        if (!interaction.member.roles.cache.has(requiredRoleID)) {
            if (isInteraction) {
                await interaction.editReply({
                    content: "Nie masz uprawnień do użycia tej komendy.",
                    flags: MessageFlags.Ephemeral
                });
            }
            return this.callNextAction(cache);
        }
    }

    try {
      const canvasWidth = 1920;
      const canvasHeight = 1080;
      const canvas = Canvas.createCanvas(canvasWidth, canvasHeight);
      const ctx = canvas.getContext("2d");

      const backgroundImageURL = getVal("backgroundImageURL");
      if (backgroundImageURL) {
        try {
          const background = await Canvas.loadImage(backgroundImageURL);
          ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);
        } catch (e) { console.error(`Błąd ładowania tła: ${e.message}`); }
      }

      const imageAttachment = interaction.options.getAttachment('zalacznik');
      if (imageAttachment && imageAttachment.url) {
        const mainImageURL = imageAttachment.url;
        try {
          const mainImage = await Canvas.loadImage(mainImageURL);
          const scale = (parseInt(getVal("mainImageScale"), 10) || 60) / 100;
          const radius = parseInt(getVal("cornerRadius"), 10) || 0;
          
          const boxWidth = canvasWidth * scale;
          const boxHeight = canvasHeight * scale;
          const boxAspectRatio = boxWidth / boxHeight;
          const imageAspectRatio = mainImage.width / mainImage.height;
          let destWidth, destHeight;

          if (imageAspectRatio > boxAspectRatio) {
            destWidth = boxWidth;
            destHeight = boxWidth / imageAspectRatio;
          } else {
            destHeight = boxHeight;
            destWidth = boxHeight * imageAspectRatio;
          }

          const x = (canvasWidth - destWidth) / 2;
          const y = (canvasHeight - destHeight) / 2;
          
          ctx.save();
          const shadowBlur = parseInt(getVal("shadowBlur"), 10) || 0;
          if (shadowBlur > 0) {
            ctx.shadowColor = getVal("shadowColor") || "#000000";
            ctx.shadowBlur = shadowBlur * scale;
            ctx.shadowOffsetX = (parseInt(getVal("shadowOffsetX"), 10) || 0) * scale;
            ctx.shadowOffsetY = (parseInt(getVal("shadowOffsetY"), 10) || 0) * scale;
          }
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.arcTo(x + destWidth, y, x + destWidth, y + radius, radius);
          ctx.lineTo(x + destWidth, y + destHeight - radius); ctx.arcTo(x + destWidth, y + destHeight, x + destWidth - radius, y + destHeight, radius);
          ctx.lineTo(x + radius, y + destHeight); ctx.arcTo(x, y + destHeight, x, y + destHeight - radius, radius);
          ctx.lineTo(x, y + radius); ctx.arcTo(x, y, x + radius, y, radius);
          ctx.closePath();
          if (shadowBlur > 0) {
            ctx.fillStyle = getVal("shadowColor") || "#000000";
            ctx.fill();
          }
          ctx.restore();

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.arcTo(x + destWidth, y, x + destWidth, y + radius, radius);
          ctx.lineTo(x + destWidth, y + destHeight - radius); ctx.arcTo(x + destWidth, y + destHeight, x + destWidth - radius, y + destHeight, radius);
          ctx.lineTo(x + radius, y + destHeight); ctx.arcTo(x, y + destHeight, x, y + destHeight - radius, radius);
          ctx.lineTo(x, y + radius); ctx.arcTo(x, y, x + radius, y, radius);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(mainImage, x, y, destWidth, destHeight);
          ctx.restore();

        } catch (e) { console.error(`Błąd ładowania grafiki głównej: ${e.message}`); }
      }
      
      const mainText = getVal("mainText");
      if (mainText) {
        const fontPath = getVal("fontPath") || "fonts\\proxima.otf";
        const FONT_FAMILY = "CustomFont";
        try { Canvas.registerFont(path.join(process.cwd(), fontPath), { family: FONT_FAMILY }); }
        catch (e) { console.error(`Błąd ładowania czcionki: "${fontPath}". Błąd: ${e.message}`); }
        
        ctx.fillStyle = getVal("fontColor") || "#FFFFFF";
        ctx.font = `bold ${parseInt(getVal("fontSize"), 10) || 180}px "${FONT_FAMILY}", Sans-Serif`;
        ctx.textAlign = "center";
        const textY = parseInt(getVal("textYPosition"), 10) || 160;
        ctx.fillText(mainText, canvasWidth / 2, textY);
      }

      const topLayerImageURL = getVal("topLayerImageURL");
      if (topLayerImageURL) {
        try {
          const topImage = await Canvas.loadImage(topLayerImageURL);
          ctx.drawImage(topImage, 0, 0, canvasWidth, canvasHeight);
        } catch (e) { console.error(`Błąd ładowania obrazu na wierzchu: ${e.message}`); }
      }
      
      const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: "portfolio.png" });

      const guild = interaction ? interaction.guild : channel.guild;
      const serverName = guild.name;
      const serverIcon = guild.iconURL({ extension: "png", size: 128 }) || null;
      const now = new Date();
      const timestamp = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      const embed = new EmbedBuilder().setColor(getVal("embedColor") || "#ea29d1").setImage("attachment://portfolio.png");
      const embedTitle = getVal("embedTitle"); if(embedTitle) embed.setTitle(embedTitle);
      const embedDesc = getVal("embedDesc"); if(embedDesc) embed.setDescription(embedDesc);
      embed.setThumbnail(serverIcon);
      embed.setFooter({ text: `${serverName} - ${timestamp}`, iconURL: serverIcon });

      const realizator = getVal("realizatorField");
      const dlaKogo = getVal("dlaKogoField");
      if(realizator || dlaKogo) {
        embed.addFields([
            { name: "Wykonane przez:", value: realizator || " ", inline: true },
            { name: "Dla kogo:", value: dlaKogo || " ", inline: true }
        ]);
      }
      
      const targetChannel = interaction ? interaction.channel : channel;
      if (targetChannel && targetChannel.isTextBased()) {
        const sentMessage = await targetChannel.send({ embeds: [embed], files: [attachment] });
        if(sentMessage) {
            try { await sentMessage.react('🔥'); }
            catch(e) { console.error("Portfolio Mod: Nie udało się dodać reakcji.", e.message); }
        }

        const secondImageURL = getVal("secondMessageImageURL");
        if (secondImageURL) {
            try {
                await targetChannel.send({ content: secondImageURL });
            } catch(e) {
                console.error("Portfolio Mod: Nie udało się wysłać drugiej wiadomości.", e.message);
            }
        }

      } else { console.error(`Portfolio Mod: Nie znaleziono kanału.`); }

    } catch (error) {
      console.error("Wystąpił błąd w modzie 'Portfolio':", error);
      if (isInteraction) {
        try {
          if (interaction.replied || interaction.deferred) {
            await interaction.editReply({ content: "Wystąpił błąd podczas generowania grafiki.", embeds: [], files: [], flags: MessageFlags.Ephemeral });
          }
        } catch (e) {}
      }
    } finally {
      this.callNextAction(cache);
    }
  },

  mod() {}
};
