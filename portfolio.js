module.exports = {
  /*************************************************************************************************
  *                                                                                                *
  *                                        PORTFOLIO MOD                                           *
  *                                       Autor: euforia.44                                        *
  *                                         Wersja: 7.1.0                                          *
  *                                                                                                *
  *   Ten mod i jego kod źródłowy są własnością intelektualną autora.                               *
  *   Zabrania się redystrybucji, modyfikacji lub sprzedaży bez wyraźnej zgody autora.              *
  *                                                                                                *
  *************************************************************************************************/

  name: "Portfolio Mod",
  displayName: "Portfolio Mod",
  section: "Canvas",
  author: "euforia.44",
  version: "7.1.0",
  short_description: "Zaawansowany generator grafik portfolio z licznymi opcjami personalizacji.",

  subtitle(data) {
    return "Generuje profesjonalną grafikę portfolio.";
  },

  fields: [
    "requiredRoleID", "embedTitle", "embedDesc", "embedColor",
    "realizatorField", "dlaKogoField", "secondMessageImageURL", "targetChannelID",
    "mainText", "fontPath", "fontSize", "fontColor", "textVerticalAlign", "reactionEmoji",
    "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY",
    "topLayerImageURL", "mainImageScale", "cornerRadius",
    "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "backgroundImageURL",
    "watermarkTransparency"
  ],

  html(isEvent, data) {
    return `
      <div style="padding: 10px;">
        <tab-system>
          <tab label="Settings 1" icon="cogs">
            <div style="padding: 10px;">
                <div style="width: 100%; margin-bottom: 12px;">
                    <label>ID Roli z Uprawnieniami (zostaw puste, aby wszyscy mogli używać)</label>
                    <input id="requiredRoleID" class="round" type="text" placeholder="Wklej tutaj ID roli...">
                </div>
                <div style="width: 100%; margin-bottom: 12px;">
                    <label>ID Kanału do Wysyłki (zostaw puste, aby wysyłać na obecnym kanale)</label>
                    <input id="targetChannelID" class="round" type="text" placeholder="Wklej tutaj ID kanału...">
                </div>
                <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                    <div style="width: 60%;"><label>Tytuł Embedu</label><input id="embedTitle" class="round" type="text" value="PORTFOLIO"></div>
                    <div style="width: 40%;"><label>Kolor Embedu</label><input id="embedColor" class="round" type="text" value="#ea29d1"></div>
                </div>
                <div style="margin-bottom: 12px;">
                  <label>Opis Embedu</label><textarea id="embedDesc" class="round" rows="2" style="width: 100%; resize: vertical;">Nowa praca już wleciała! Podoba się? Zostaw reakcję!</textarea>
                </div>
                <div style="display: flex; gap: 10px;">
                    <div style="width: 50%;"><label>Pole "Wykonane przez"</label><input id="realizatorField" class="round" type="text" value="\${slashParams('Wykonawca')}"></div>
                    <div style="width: 50%;"><label>Pole "Dla kogo"</label><input id="dlaKogoField" class="round" type="text" value="\${slashParams('dlakogo')}"></div>
                </div>
            </div>
          </tab>

          <tab label="Settings 2" icon="font">
            <div style="padding: 10px;">
              <label>Tekst na Obrazie</label>
              <input id="mainText" class="round" type="text" value="GRAFIKA" style="margin-bottom: 8px;">
              <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                <div style="flex-grow: 1;"><label>Czcionka</label><input id="fontPath" class="round" type="text" value="fonts/proxima.otf"></div>
                <div style="width: 90px;"><label>Maks. Rozmiar</label><input id="fontSize" class="round" type="number" value="180"></div>
                <div style="width: 90px;"><label>Kolor</label><input id="fontColor" class="round" type="text" value="#FFFFFF"></div>
              </div>
              <div style="margin-top: 8px; margin-bottom: 12px;"><label><b>Cień dla Tekstu</b></label></div>
              <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                <div style="width: 25%;"><label>Kolor</label><input id="textShadowColor" class="round" type="text" value="#000000"></div>
                <div style="width: 25%;"><label>Rozmycie</label><input id="textShadowBlur" class="round" type="number" value="5"></div>
                <div style="width: 25%;"><label>Offset X</label><input id="textShadowOffsetX" class="round" type="number" value="2"></div>
                <div style="width: 25%;"><label>Offset Y</label><input id="textShadowOffsetY" class="round" type="number" value="2"></div>
              </div>
              <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                <div style="width: 50%;">
                  <label>Wyrównanie Tekstu w Pionie</label>
                  <select id="textVerticalAlign" class="round">
                      <option value="top" selected>Góra</option>
                      <option value="bottom">Dół</option>
                  </select>
                </div>
                <div style="width: 50%;">
                  <label>Reakcja Bota (Emoji)</label>
                  <input id="reactionEmoji" class="round" type="text" value="🔥">
                </div>
              </div>
              <div>
                  <label>URL Obrazu w drugiej wiadomości</label>
                  <input id="secondMessageImageURL" class="round" type="text" placeholder="Domyślnie puste">
              </div>
            </div>
          </tab>

          <tab label="Obraz" icon="image">
            <div style="padding: 10px;">
              <div style="margin-bottom: 15px;"><label><b>Warstwa Ramki</b></label><input id="topLayerImageURL" class="round" type="text" placeholder="Domyślnie puste"></div>
              <div style="margin-bottom: 15px;">
                <div style="display: flex; gap: 10px; margin-top: 8px;">
                  <div style="width: 50%;"><label>Skala Grafiki (%)</label><input id="mainImageScale" class="round" type="number" value="60"></div>
                  <div style="width: 50%;"><label>Zaokrąglenie (px)</label><input id="cornerRadius" class="round" type="number" value="50"></div>
                </div>
                <div style="margin-top: 8px;"><label><b>Cień dla Grafiki</b></label></div>
                <div style="display: flex; gap: 10px; margin-bottom: 12px;">
                  <div style="width: 25%;"><label>Kolor</label><input id="shadowColor" class="round" type="text" value="#000000"></div>
                  <div style="width: 25%;"><label>Rozmycie</label><input id="shadowBlur" class="round" type="number" value="15"></div>
                  <div style="width: 25%;"><label>Offset X</label><input id="shadowOffsetX" class="round" type="number" value="0"></div>
                  <div style="width: 25%;"><label>Offset Y</label><input id="shadowOffsetY" class="round" type="number" value="10"></div>
                </div>
                <div style="width: 50%;"><label>Przezroczystość Znaku Wodnego (%)</label><input id="watermarkTransparency" class="round" type="number" value="35"></div>
              </div>
              <div><label><b>Warstwa Tła</b></label><input id="backgroundImageURL" class="round" type="text" value="https://cdn.discordapp.com/attachments/1384134507980132412/1391228184007282820/tloportfolio.png?ex=686b21b6&is=6869d036&hm=62d9d0ca73b3bd1428f65ac1f425de097c36c73dcdafc7e118ce9c48347c69fb&"></div>
            </div>
          </tab>
        </tab-system>
      </div>
    `;
  },

  async action(cache) {
    const { AttachmentBuilder, EmbedBuilder, MessageFlags } = require("discord.js");
    const Canvas = require("canvas");
    const sharp = require('sharp');
    const path = require("path");

    const data = cache.actions[cache.index];
    const getVal = (field) => this.evalMessage(data[field], cache);
    const { interaction } = cache;
    const MOD_NAME = "[Portfolio Mod]";

    const defaults = {
        embedColor: "#ea29d1", mainImageScale: 60, cornerRadius: 50,
        shadowColor: "#000000", shadowBlur: 15, shadowOffsetX: 0, shadowOffsetY: 10,
        fontPath: "fonts/proxima.otf", fontSize: 180, fontColor: "#FFFFFF",
        textVerticalAlign: "top", watermarkTransparency: 35,
        textShadowColor: "#000000", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0,
    };
    
    const parseIntWithDefault = (value, fallback) => {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? fallback : parsed;
    };

    const getFittingFontSize = (ctx, text, style, initialSize, maxWidth) => {
        let fontSize = initialSize;
        do {
            ctx.font = `${style} ${fontSize}px "CustomFont", sans-serif`;
            if (ctx.measureText(text).width <= maxWidth) return fontSize;
            fontSize -= 5;
        } while (fontSize > 10);
        return fontSize;
    };

    if (interaction && typeof interaction.deferReply === 'function' && !interaction.deferred) {
      try {
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
      } catch (e) { return console.error(`${MOD_NAME} Nie udało się odroczyć odpowiedzi:`, e); }
    }
    
    const requiredRoleID = getVal("requiredRoleID");
    if (requiredRoleID && interaction.member && !interaction.member.roles.cache.has(requiredRoleID)) {
      await interaction.editReply({ content: "Nie masz uprawnień do użycia tej komendy." }).catch(e => console.error(e));
      return this.callNextAction(cache);
    }

    try {
      const canvasWidth = 1920;
      const canvasHeight = 1080;
      const canvas = Canvas.createCanvas(canvasWidth, canvasHeight);
      const ctx = canvas.getContext("2d");

      // Warstwa 1 Tło
      const backgroundImageURL = getVal("backgroundImageURL");
      if (backgroundImageURL) {
        try {
          const background = await Canvas.loadImage(backgroundImageURL);
          ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);
        } catch (error) { console.error(`${MOD_NAME} Błąd ładowania obrazu tła.`, error); }
      }

      // Warstwa 2 Załącznik
      const imageAttachment = interaction.options.getAttachment('zalacznik');
      let mainImageY = canvasHeight / 2, mainImageHeight = 0;

      if (imageAttachment?.url) {
        try {
          const imageBuffer = await (await fetch(imageAttachment.url)).arrayBuffer();
          const pngBuffer = await sharp(Buffer.from(imageBuffer)).toFormat('png').toBuffer();
          const mainImage = await Canvas.loadImage(pngBuffer);
          const scale = parseIntWithDefault(getVal("mainImageScale"), defaults.mainImageScale) / 100;
          const radius = parseIntWithDefault(getVal("cornerRadius"), defaults.cornerRadius);
          const boxWidth = canvasWidth * Math.max(0.1, Math.min(1, scale));
          const boxHeight = canvasHeight * Math.max(0.1, Math.min(1, scale));
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
          mainImageY = y;
          mainImageHeight = destHeight;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x + radius, y); ctx.lineTo(x + destWidth - radius, y); ctx.arcTo(x + destWidth, y, x + destWidth, y + radius, radius);
          ctx.lineTo(x + destWidth, y + destHeight - radius); ctx.arcTo(x + destWidth, y + destHeight, x + destWidth - radius, y + destHeight, radius);
          ctx.lineTo(x + radius, y + destHeight); ctx.arcTo(x, y + destHeight, x, y + destHeight - radius, radius);
          ctx.lineTo(x, y + radius); ctx.arcTo(x, y, x + radius, y, radius); ctx.closePath();
          const shadowBlur = parseIntWithDefault(getVal("shadowBlur"), defaults.shadowBlur);
          if (shadowBlur > 0) {
            ctx.shadowColor = getVal("shadowColor") || defaults.shadowColor; ctx.shadowBlur = shadowBlur;
            ctx.shadowOffsetX = parseIntWithDefault(getVal("shadowOffsetX"), defaults.shadowOffsetX); ctx.shadowOffsetY = parseIntWithDefault(getVal("shadowOffsetY"), defaults.shadowOffsetY);
            ctx.fillStyle = "rgba(0,0,0,0.01)"; ctx.fill();
          }
          ctx.clip(); ctx.drawImage(mainImage, x, y, destWidth, destHeight); ctx.restore();
        } catch (error) { console.error(`${MOD_NAME} Błąd rysowania grafiki głównej.`, error); }
      }
      
      const unsafeFontPath = getVal("fontPath") || defaults.fontPath;
      const botDir = process.cwd();
      const safeFontPath = path.resolve(botDir, unsafeFontPath);

      if (!safeFontPath.startsWith(botDir)) {
          console.error(`${MOD_NAME} Niedozwolona ścieżka czcionki: ${unsafeFontPath}`);
      } else {
        try {
            const FONT_FAMILY = "CustomFont";
            Canvas.registerFont(safeFontPath, { family: FONT_FAMILY });

            // Warstwa Tekstu
            const mainText = getVal("mainText");
            if (mainText) {
                ctx.save();
                const textShadowBlur = parseIntWithDefault(getVal("textShadowBlur"), defaults.textShadowBlur);
                if (textShadowBlur > 0) {
                    ctx.shadowColor = getVal("textShadowColor") || defaults.textShadowColor; ctx.shadowBlur = textShadowBlur;
                    ctx.shadowOffsetX = parseIntWithDefault(getVal("textShadowOffsetX"), defaults.textShadowOffsetX); ctx.shadowOffsetY = parseIntWithDefault(getVal("textShadowOffsetY"), defaults.textShadowOffsetY);
                }
                const initialFontSize = parseIntWithDefault(getVal("fontSize"), defaults.fontSize);
                const fittingFontSize = getFittingFontSize(ctx, mainText, "bold", initialFontSize, canvasWidth * 0.9);
                ctx.font = `bold ${fittingFontSize}px "${FONT_FAMILY}", sans-serif`;
                ctx.fillStyle = getVal("fontColor") || defaults.fontColor;
                ctx.textAlign = "center"; ctx.textBaseline = "middle";
                const verticalAlign = getVal("textVerticalAlign") || defaults.textVerticalAlign;
                const textY = verticalAlign === 'bottom' ? (mainImageY + mainImageHeight) + ((canvasHeight - (mainImageY + mainImageHeight)) / 2) : mainImageY / 2;
                ctx.fillText(mainText, canvasWidth / 2, textY);
                ctx.restore();
            }
            
            // Warstwa 1 Dodatkowa (Ramka)
            const topLayerImageURL = getVal("topLayerImageURL");
            if (topLayerImageURL) {
              try {
                const topImage = await Canvas.loadImage(topLayerImageURL);
                ctx.drawImage(topImage, 0, 0, canvasWidth, canvasHeight);
              } catch (error) { console.error(`${MOD_NAME} Błąd ładowania ramki.`, error); }
            }

            // Watermark Warstwa
            let watermarkText;
            try {
              watermarkText = interaction.options.getString('watermark');
            } catch (error) {
              if (error.code === 'CommandInteractionOptionType') console.error(`${MOD_NAME} Błąd konfiguracji: Typ opcji 'watermark' musi być 'String' (Tekst).`);
            }
      
            if (watermarkText) {
                const transparencyValue = parseIntWithDefault(getVal("watermarkTransparency"), defaults.watermarkTransparency);
                ctx.globalAlpha = Math.max(0, Math.min(100, transparencyValue)) / 100;
                const fittingWatermarkSize = getFittingFontSize(ctx, watermarkText, "bold", 30, canvasWidth * 0.4);
                ctx.font = `bold ${fittingWatermarkSize}px "${FONT_FAMILY}", sans-serif`;
                ctx.fillStyle = "#FFFFFF"; ctx.textAlign = "right"; ctx.textBaseline = "bottom";
                ctx.fillText(watermarkText, canvasWidth - 20, canvasHeight - 20);
                ctx.globalAlpha = 1.0;
            }
        } catch (error) { console.error(`${MOD_NAME} Błąd podczas operacji na tekście.`, error); }
      }
      
      const attachment = new AttachmentBuilder(canvas.toBuffer("image/png"), { name: "portfolio.png" });
      const { guild } = interaction;
      const serverIcon = guild.iconURL({ extension: "png", size: 128 });
      const timestamp = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
      const colorInput = getVal("embedColor");

      const embed = new EmbedBuilder()
          .setColor(typeof colorInput === 'string' && colorInput.startsWith('#') ? colorInput : defaults.embedColor)
          .setImage("attachment://portfolio.png").setTitle(getVal("embedTitle") || null).setDescription(getVal("embedDesc") || null)
          .setThumbnail(serverIcon).setFooter({ text: `${guild.name} • ${timestamp}`, iconURL: serverIcon });

      const realizator = getVal("realizatorField");
      const dlaKogo = getVal("dlaKogoField");
      if (realizator || dlaKogo) {
        embed.addFields({ name: "Wykonane przez:", value: realizator || " ", inline: true }, { name: "Dla kogo:", value: dlaKogo || " ", inline: true });
      }
      
      const messagePayload = { embeds: [embed], files: [attachment] };
      
      const targetChannelID = getVal("targetChannelID");
      const finalChannel = targetChannelID ? await guild.channels.fetch(targetChannelID).catch(() => interaction.channel) : interaction.channel;

      const sentMessage = await finalChannel.send(messagePayload);
      
      await interaction.editReply({ content: 'Grafika została pomyślnie wysłana.', embeds: [], files: [] });
      
      if (sentMessage) {
        const reactionEmoji = getVal("reactionEmoji");
        if (reactionEmoji) sentMessage.react(reactionEmoji).catch(e => console.error(`${MOD_NAME} Nie udało się dodać reakcji:`, e));
        const secondImageURL = getVal("secondMessageImageURL");
        if (secondImageURL) sentMessage.channel.send({ content: secondImageURL }).catch(e => console.error(`${MOD_NAME} Nie udało się wysłać drugiej wiadomości:`, e));
      }

    } catch (error) {
      console.error(`${MOD_NAME} Wystąpił krytyczny błąd:`, error);
      await interaction.editReply({ content: "Wystąpił nieoczekiwany błąd. Sprawdź konsolę bota.", embeds: [], files: [] }).catch(() => {});
    } finally {
      this.callNextAction(cache);
    }
  },

  mod() {}
};
