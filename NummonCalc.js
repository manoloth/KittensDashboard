dojo.declare("classes.managers.NummonStatsManager", com.nuclearunicorn.core.TabManager, {
    
    game: null,
    lang: "en",
    i18ng: null,
    i18nData: {
        "en": {
            "catnip": "Catnip / Sec",

            "getCatnipInWarmSpring": "During Warm Spring",
            "getCatnipColdWinter": "During Cold Winter",

            "science": "Science",

            "getCelestialPerDay": "Chance of Celestial Events",
            "getCelestialAutoSuccess": "Celestial Event Auto Success Rate",
            "getMaxComped": "Maximum Helpful Compediums",
            "getBlueprintCraft": "Blueprints Per Craft",

            "trade": "Trade",

            "titanium": "Titanium",

            "getTitPerZebraTrade": "Titanium Per Zebra Trade",
            "getZebraTradesLeftToMaxTit": "Trades Left to Cap Titanium",
            "getZebraTradesToMaxTit": "Max Zebra Trades to Cap Titanium",
            "getZebraTitTradeChance": "Chance to Recieve Titanium Per Zebra Trade",
            
            "unicorns": "Unicorns",

            "getBestUniBuilding": "Best Unicorn Building",
            "getBestAliBuilding": "Best Alicorn Building Per Ivory Cost",
            "getNecrocornsPerSecond": "Necrocorns Per Second",
            "getNecrocornTime": "Time Until Next Necrocorn",
            "getLeviChance": "Chance per year of Leviathans",

            "religion": "Religion",

            "getReligionProductionBonusCap": "Solar Revolution Limit",
            "getNextTranscendTierProgress": "Progress to Next Transcendence Tier",
            "getRecNextTranscendTierProgress": "Rec.Progress to Next Transcendence Tier",
            "getApocryphaAfterAdore": "Apocrypha After Adoring the Galaxy",
            "getEffectivePraiseValue": "Effective Praise Value",
            "getWorshipAfterPraise": "Worship After Praising",
            "getSolRevBonusAfterPraise": "Solar Revolution Bonus After Praising",
            
            "paragon": "Paragon Bonus",

            "getParagonProductionBonus": "Production Bonus",
            "getParagonStorageBonus": "Storage Bonus(include horizon)",
            
            "time": "Time",

            "getTCPerSacrifice": "Time Crystals per Sacrifice",
            "getRelicPerTCRefine": "Relics Per Time Crystal Refine",
            "getTradeAmountAvg": "Time Crystal income expected value by Per.Combust TC",
            "getResourceRetrievalTCBackYears": "Next ResourceRetrieval get TC back of game years",

            "pollution": "Pollution",
            
            "others": "Others",

            "getBestMagnetoBuilding": "Best Magneto/Steamwork Building",
            "getUraniumForThoriumReactors": "Uranium/Sec for Thorium Reactors",
            "getDarkFutureYears": "Years until Dark Future",
            "getBestRelicBuilding": "Best improve Relic Building",
            "getAIlv15Time": "Time until AI level 15",
            "getfutureSeason": "Seasons until next TemporalParadox",

            "best.none": "No Building",
            "infinity": "Infinity",
            "sec": "/sec",
            "done": "Done",
        },
        "zh": {
            "catnip": "猫薄荷 / 秒",

            "getCatnipInWarmSpring": "暖春",
            "getCatnipColdWinter": "寒冬",

            "science": "科学",

            "getCelestialPerDay": "天文事件几率",
            "getCelestialAutoSuccess": "天文事件自动观测几率",
            "getMaxComped": "最大加成所需概要数量",
            "getBlueprintCraft": "每次工艺制作的蓝图",

            "titanium": "钛",

            "getTitPerZebraTrade": "每次和斑马贸易获得的钛",
            "getZebraTradesLeftToMaxTit": "达到钛上限的剩余斑马交易次数",
            "getZebraTradesToMaxTit": "达到钛上限的斑马交易次数",

            "unicorns": "独角兽",

            "getBestUniBuilding": "最佳独角兽建筑",
            "getBestAliBuilding": "象牙性价比最高天角兽建筑",
            "getNecrocornsPerSecond": "每秒获得的死灵兽",
            "getNecrocornTime": "距离下一个死灵兽的时间",
            "getLeviChance": "利维坦每年到来降临的几率",

            "religion": "宗教",

            "getReligionProductionBonusCap": "太阳革命极限加成",
            "getNextTranscendTierProgress": "到达下一超越等级的进度",
            "getRecNextTranscendTierProgress": "推荐下一超越等级的进度",

            "paragon": "领导力加成",

            "getParagonProductionBonus": "生产加成",
            "getParagonStorageBonus": "库存加成(含黑洞)",

            "time": "时间",

            "getTCPerSacrifice": "每次献祭得到的时间水晶",
            "getRelicPerTCRefine": "每次时间水晶精炼得到遗物",
            "getTradeAmountAvg": "每跳一年的时间水晶贸易收入",
            "getResourceRetrievalTCBackYears": "下个资源回复水晶回本需跳(年)",

            "others": "其他",

            "getBestMagnetoBuilding": "最佳磁电机/蒸汽工坊",
            "getUraniumForThoriumReactors": "钍反应堆每秒耗铀",
            "getDarkFutureYears": "距离黑暗未来到来年份",
            "getBestRelicBuilding": "获取最佳遗物建筑",
            "getAIlv15Time": "天网觉醒倒计时",
            "getfutureSeason": "距离下次时间悖论(季节)",
            
            "best.none": "无",
            "infinity": "∞",
            "sec": "/秒",
            "done": "已完成",
        },
    },

    i18n: function(key, args) {
        if (key[0] == "$")
            return this.i18ng(key.slice(1));
        value = this.i18nData[this.lang][key];
        if (!value) {
            value = this.i18nData["en"][key];
            if (!value) {
                console.error("key \"" + key + "\" not found");
                return "$" + key;
            }
            console.error("key \"" + key + "\" not found in " + this.lang);
        }
        if (args)
            for (var i = 0; i < args.length; i++)
                value = value.replace("{"+ i + "}", args[i]);
        return value;
    },
    
    roundThisNumber: function(num){
        num*=1000;
        num+=.5;
        num=Math.floor(num);
        num/=1000;
        return num;
    },
     
    getButton: function(tab, buttonName){
        for(var i in this.game.tabs[tab].children){
            if(this.game.tabs[tab].children[i].opts.building == buttonName)
                return parseInt(i);
        }
    },
    
    getButtonPrice: function(tabPanel, buttonName, resName){
        for (var i in tabPanel){
            if(tabPanel[i].id == buttonName){
                var buttonModel = tabPanel[i].opts;
                break;
            }
        }
        for (var a in buttonModel.prices){
            if(buttonModel.prices[a].name == resName){
                var cost = buttonModel.prices[a].val;
                break;
            }
        }
        return cost;
    },

    makeNiceString: function(num, numDigits = 3){
        if(typeof(num) == "number" && num != Infinity){
            num = num.toFixed(numDigits);
            num = num.toString();
            var decimal = num.substr(num.indexOf("."));
            if(decimal == "." + Array(numDigits + 1).join("0"))
                num = num.substr(0,num.indexOf("."));
            for(var i = (num.indexOf(".") != -1 ? num.indexOf(".") - 3 : num.length - 3); i > 0; i -= 3)
                num = num.substr(0,i) + "," + num.substr(i);
        }
        else
            num = num.toString();
        return num;
    },

    // CATNIP :

    getPotentialCatnip: function (number) {
            var fieldProd = this.game.getEffect('catnipPerTickBase') * number;
            var vilProd = (this.game.village.getResProduction().catnip) ? this.game.village.getResProduction().catnip * (1 + this.game.getEffect('catnipJobRatio')) : 0;
            var baseProd = fieldProd + vilProd;
            baseProd *= 1 + this.game.getEffect("catnipRatio");

            var paragonBonus = this.game.challenges.isActive("winterIsComing") ? 0 : this.game.prestige.getParagonProductionRatio();
            baseProd *= 1 + paragonBonus;

            baseProd *= 1 + this.game.religion.getSolarRevolutionRatio() * (1 + this.game.bld.pollutionEffects["solarRevolutionPollution"]);

            baseProd *= 1 + (this.game.getEffect("blsProductionBonus") * this.game.resPool.get("sorrow").value);
            
            baseProd = this.game.calendar.cycleEffectsFestival({catnip: baseProd})['catnip'];

            baseProd *= 1 + this.game.bld.pollutionEffects["catnipPollutionRatio"];

            var baseDemand = this.game.village.getResConsumption()['catnip'];
            baseDemand *= 1 + this.game.getEffect("catnipDemandRatio");
            if (this.game.village.sim.kittens.length > 0 && this.game.village.happiness > 1) {
                var happyCon = Math.max(this.game.village.happiness * (1 + this.game.getEffect("hapinnessConsumptionRatio")) - 1, 0);
                if (this.game.challenges.isActive("anarchy")) {
                    baseDemand *= 1 + happyCon * (1 + this.game.getEffect("catnipDemandWorkerRatioGlobal"));
                } else {
                    baseDemand *= 1 + happyCon * (1 + this.game.getEffect("catnipDemandWorkerRatioGlobal")) * (1 - this.game.village.getFreeKittens() / this.game.village.sim.kittens.length);
                }
            }
            baseProd += baseDemand;

            baseProd += this.game.getResourcePerTickConvertion('catnip');
            baseProd *= 1 + this.game.timeAccelerationRatio();
            baseProd *= this.game.ticksPerSecond;
            return baseProd;
        },
/*
    getCatnipColdWinter: function(){
        var Season = this.game.calendar.seasons;
        for (var i in Season){
            if(Season[i].name == "winter"){
                var ColdWintercatnip = Season[i].modifiers.catnip;
                break;
            }
        }
        ColdWintercatnip -= 0.15;
        ColdWintercatnip *= 1 + this.game.getLimitedDR(this.game.getEffect("coldHarshness"),1);
        if (game.science.getPolicy("communism").researched) {
            ColdWintercatnip = 0;
        }
        catnip = this.getPotentialCatnip(ColdWintercatnip);
        return catnip;
    },
    getCatnipInWarmSpring: function(){
        var Season = this.game.calendar.seasons;
        for (var i in Season){
            if(Season[i].name == "spring"){
                var WarmSpringRatio = Season[i].modifiers.catnip;
                break;
            }
        }
        WarmSpringRatio += 0.15;
        WarmSpringRatio *= 1 + this.game.getLimitedDR(this.game.getEffect("springCatnipRatio"), 2);
        var catnip = this.getPotentialCatnip(WarmSpringRatio);
        return catnip;
    },
//*/
    getWeatherMod: function(res, weather, season) {
        let currentSeason = this.game.calendar.seasons[season];

        var mod = currentSeason.modifiers[res.name] ? currentSeason.modifiers[res.name] : 1;

        if (res.name != "catnip") {
            return mod;
        }

        if (this.game.science.getPolicy("communism").researched && currentSeason.name == "winter" && weather == "cold"){
            return 0;
        }

        if (weather == "warm"){
            mod +=  0.15;
        } else if (weather == "cold"){
            mod += -0.15;
        }
        if (this.game.challenges.getChallenge("winterIsComing").on && weather == "cold") {
            mod *= 1 + this.game.getLimitedDR(this.game.getEffect("coldHarshness"),1);
        }
        if (currentSeason.name == "spring") {
            mod *= (1 + this.game.getLimitedDR(this.game.getEffect("springCatnipRatio"), 2));
        }

        return mod;
    },
    renderCatnipTable: function(container) {
        const catnip = this.game.resPool.get("catnip");2
        const weathers = [null, "warm", "cold"];
        const COLUMN_HIGHLIGHT_CLASS = "highlited";
        const ROW_HIGHLIGHT_CLASS = "highlited";
        let table = dojo.create("table", {class: "statTable stats-wider"}, container);
        let cell = null, tr = null;

        tr = dojo.create("tr", undefined, table);
        
        cell = dojo.create("th", undefined, tr);
        cell = dojo.create("th", {style: game.calendar.season === 0 ? COLUMN_HIGHLIGHT_CLASS : ""}, tr); cell.textContent = $I("calendar.season.spring");
        cell = dojo.create("th", {style: game.calendar.season === 1 ? COLUMN_HIGHLIGHT_CLASS : ""}, tr); cell.textContent = $I("calendar.season.summer");
        cell = dojo.create("th", {style: game.calendar.season === 2 ? COLUMN_HIGHLIGHT_CLASS : ""}, tr); cell.textContent = $I("calendar.season.autumn");
        cell = dojo.create("th", {style: game.calendar.season === 3 ? COLUMN_HIGHLIGHT_CLASS : ""}, tr); cell.textContent = $I("calendar.season.winter");
1
        for (let w/*eather*/ = 0; w < 3; w++) {
            tr = dojo.create("tr", undefined, table);
            cell = dojo.create("th", undefined, tr);
            if (weathers[w] !== null) {
                cell.textContent = $I('calendar.weather.' + weathers[w]);
            }
            for (let s/*eason*/ = 0; s < this.game.calendar.seasons.length; s++) {
                cell = dojo.create("td", undefined, tr);
                if (game.calendar.season === s) {
                    dojo.addClass(cell, ROW_HIGHLIGHT_CLASS);
                }
                if (game.calendar.weather === weathers[w]) {
                    dojo.addClass(cell, ROW_HIGHLIGHT_CLASS);
                }
                let mod = this.getWeatherMod(catnip, weathers[w], s);
                let catnipValue = this.getPotentialCatnip(mod);
                let text = game.getDisplayValue(catnipValue)
                // text += " (" + mod + ")";
                cell.textContent = text;
                cell.title = mod;
            }
        }
    },

    // SCIENCE :
  
    getCelestialPerDay: function(){
        var chanceRatio = 1;
        if(this.game.prestige.getPerk("chronomancy").researched)
            chanceRatio *= 1.1;
        chanceRatio *= 1 + this.game.getEffect("timeRatio") * 0.25;
        
        var chance = 25;
        chance += this.game.getEffect("starEventChance") * 10000;
        chance *= chanceRatio;
        if(this.game.prestige.getPerk("astromancy").researched)
            chance *= 2;
        
        chance = Math.round(chance);
        chance /= 100;//It's out of 10,000 originally
        return chance + "%";
    },
    
    getCelestialAutoSuccess: function(){
        var autoChance = this.game.getEffect("starAutoSuccessChance") * 100;
        if(this.game.prestige.getPerk("astromancy").researched)
            autoChance *= 2;
        autoChance = Math.round(autoChance);
        if(autoChance > 100)
            autoChance = 100;
        return autoChance + "%";
    },
        
    getMaxComped: function(){
        var scienceBldMax = this.game.bld.getEffect("scienceMax");
        var compCap = this.game.bld.getEffect("scienceMaxCompendia");
        
        var IWRatio = this.game.ironWill ? 10 : 1;
        var blackLibrary = this.game.religion.getTU("blackLibrary");
        if(this.game.prestige.getPerk("codexLeviathanianus").researched){
            var ttBoostRatio = (0.05 * (1 + blackLibrary.val * (blackLibrary.effects["compendiaTTBoostRatio"] + this.game.getEffect("blackLibraryBonus"))));
            IWRatio *= (1 + ttBoostRatio * this.game.religion.transcendenceTier);
        }
        
        var compCapFinal = scienceBldMax * IWRatio + compCap;
        compCapFinal /= 10;
        return compCapFinal;
    },

    getBlueprintCraft: function(){
        return 1 + this.game.getResCraftRatio("blueprint");
    },


    // TRADE: 
    renderTradeQuantity: function(game, race, good, tr) {
        let currentSeason = game.calendar.getCurSeason().name;
        let baseTradeRatio = 1 + this.game.diplomacy.getTradeRatio();
        let tradeRatio = baseTradeRatio + game.diplomacy.calculateTradeBonusFromPolicies(race.name, game) + game.challenges.getChallenge("pacifism").getTradeBonusEffect(game);
        let res = game.resPool.get(good.name);
        let average = good.value * tradeRatio * (1 + race.energy * 0.02) * (1 + (good.seasons ? good.seasons[currentSeason] : 0));

        let min = game.getDisplayValueExt(average * (1 - good.width / 2), false, false, 0),
            max = game.getDisplayValueExt(average * (1 + good.width / 2), false, false, 0);
        if (tr != undefined) {
            dojo.create("td", {className: "trade-offer-range-align", innerHTML: min + '-' + max}, tr);
        }
        return [min, max];
    },
    renderTradeInfo: function(container){
        let table = dojo.create("table", {class: 'statTable'}, container);
        let embassyEffect = game.ironWill ? 0.0025 : 0.01;

        let trades = [];
        for (let r = 0; r < game.diplomacy.races.length; r++) {
            let race = game.diplomacy.races[r]
            let headRow = dojo.create("tr", {}, table);;
            dojo.create("th", {}, headRow);
            dojo.create("th", {colspan: 1, innerHTML: $I("trade.race." + race.name)}, headRow);

            let attitudeFromPolicies = this.game.diplomacy.calculateStandingFromPolicies(race.name, this.game);
            let attitude = race.standing > 0 ? race.standing : race.standing + this.game.getEffect("standingRatio") + attitudeFromPolicies;

            dojo.create("td", {innerHTML: game.getDisplayValueExt(attitude * 100, false, false, 0) + "%"}, headRow);

            for (let i = 0; i < race.sells.length; i++) {
                let tr = dojo.create("tr", {}, table);
                let good = race.sells[i];

                let tradeChance = race.sells[i].chance *
                    (1 + (
                        race.embassyPrices ?
                        this.game.getLimitedDR(race.embassyLevel * embassyEffect, 0.75) :
                        0)
                    );

                dojo.create("th", {innerHTML: $I("resources." + good.name + ".title")}, tr);

                dojo.create("td", {
                    innerHTML: game.getDisplayValueExt(Math.min(tradeChance * 100, 100), false, false, 2) + "%",
                    title: game.getDisplayValueExt(tradeChance * 100)
                }, tr);

                this.renderTradeQuantity(game, race, good, tr);

            }
            if (race.name === "zebras") {
                let shipAmount = game.resPool.get("ship").value;
                let zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];

                let tradeChance = this.getZebraTitTradeChance();
                let quantity = this.getTitPerZebraTrade();
                let tr = dojo.create("tr", {}, table);
                dojo.create("th", {innerHTML: $I("resources.titanium.title")}, tr);
                dojo.create("td", {innerHTML: tradeChance}, tr);
                dojo.create("td", {innerHTML: game.getDisplayValueExt(quantity)}, tr);
            }
        }
    },


    // TITANIUM :

    getTitPerZebraTrade: function(){
        var shipAmount = this.game.resPool.get("ship").value;
        var zebraRelationModifierTitanium = this.game.getEffect("zebraRelationModifier") * 0.015;
        titaniumPerTrade = (1.5 + shipAmount * 0.03) * (1 + zebraRelationModifierTitanium);
        return titaniumPerTrade;
    },
    
    getZebraTradesToMaxTit: function(){
        var titaniumPerTrade = this.getTitPerZebraTrade();
        var maxTitanium = this.game.resPool.get("titanium").maxValue;
        return Math.ceil(maxTitanium / titaniumPerTrade);
    },
    
    getZebraTradesLeftToMaxTit: function(){
        var titaniumPerTrade = this.getTitPerZebraTrade();
        var titToFill = this.game.resPool.get("titanium").maxValue;
        titToFill -= this.game.resPool.get("titanium").value;
        titToFill = Math.ceil(titToFill / titaniumPerTrade);
        if(titToFill < 0)
            titToFill = 0;
        return titToFill;
    },
    getZebraTitTradeChance: function(){
        let shipAmount = game.resPool.get("ship").value;
        let zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];

        let tradeChance = 0.15 + shipAmount * 0.0035;
        return game.getDisplayValueExt(Math.min(tradeChance*100, 100)) + "%";
    },

    // UNICORN :

    getBestUniBuilding: function(log=false){
        var unicornPastureKey = "$buildings.unicornPasture.label";
        var pastureButton = this.getButton(0, "unicornPasture");
        if(typeof pastureButton === "undefined")
             return this.i18n("best.none");
        var validBuildings = ["unicornTomb","ivoryTower","ivoryCitadel","skyPalace","unicornUtopia","sunspire"];
        var unicornsPerSecond = this.game.getEffect("unicornsPerTickBase") * this.game.getTicksPerSecondUI();
        var globalRatio = this.game.getEffect("unicornsGlobalRatio")+1;
        var religionRatio = this.game.getEffect("unicornsRatioReligion")+1;
        var paragonRatio = this.game.prestige.getParagonProductionRatio()+1;
        var faithBonus = this.game.religion.getSolarRevolutionRatio()+1;
        var cycle = 1;
        if(this.game.calendar.cycles[this.game.calendar.cycle].festivalEffects["unicorns"]!=undefined)
            if(this.game.prestige.getPerk("numeromancy").researched && this.game.calendar.festivalDays)
                cycle=this.game.calendar.cycles[this.game.calendar.cycle].festivalEffects["unicorns"];
        var onZig = Math.max(this.game.bld.getBuildingExt("ziggurat").meta.on,1);
        var total = unicornsPerSecond * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
        var baseUnicornsPerRift = 500 * (1 + this.game.getEffect("unicornsRatioReligion") * 0.1);
        var riftChanceRatio = 1;
        if(this.game.prestige.getPerk("unicornmancy").researched)
            riftChanceRatio *= 1.1;
        var baseRift = this.game.getEffect("riftChance") * riftChanceRatio / (10000 * 2) * baseUnicornsPerRift;
        if(log){
            console.log("Unicorns per second: "+total);
            console.log("Base rift per second average: "+baseRift);
        }
        var bestAmoritization = Infinity;
        var bestBuilding = "";
        var pastureAmor = this.game.bld.getBuildingExt("unicornPasture").meta.effects["unicornsPerTickBase"] * this.game.getTicksPerSecondUI();
        pastureAmor = pastureAmor * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
        if(log){
            console.log("unicornPasture");
            console.log("\tBonus unicorns per second: "+pastureAmor);
        }
        pastureAmor = this.game.tabs[0].children[pastureButton].model.prices[0].val / pastureAmor;
        if(log){
            var baseWait = gamePage.tabs[0].children[pastureButton].model.prices[0].val / total;
            var avgWait = gamePage.tabs[0].children[pastureButton].model.prices[0].val / (total + baseRift);
            console.log("\tMaximum time to build: " + gamePage.toDisplaySeconds(baseWait) + " | Average time to build: " + gamePage.toDisplaySeconds(avgWait));
            console.log("\tPrice: "+gamePage.tabs[0].children[pastureButton].model.prices[0].val+" | Amortization: "+gamePage.toDisplaySeconds(pastureAmor));
        }
        if(pastureAmor < bestAmoritization){
            bestAmoritization = pastureAmor;
            bestBuilding = unicornPastureKey;
        }
        for(var i in this.game.tabs[5].zgUpgradeButtons){
            var btn = this.game.tabs[5].zgUpgradeButtons[i];
            if(validBuildings.indexOf(btn.id)!=-1){
                if(btn.model.visible){
                    unicornPrice = 0;
                    for(var j in btn.model.prices){
                        if(btn.model.prices[j].name=="unicorns")
                            unicornPrice += btn.model.prices[j].val;
                        if(btn.model.prices[j].name=="tears")
                            unicornPrice += btn.model.prices[j].val * 2500 / onZig;
                    }
                    var bld=this.game.religion.getZU(btn.id);
                    var relBonus = religionRatio;
                    var riftChance = this.game.getEffect("riftChance");
                    for(var j in bld.effects){
                        if(j=="unicornsRatioReligion")
                            relBonus += bld.effects[j]
                        if(j=="riftChance")
                            riftChance += bld.effects[j];
                    }
                    var unicornsPerRift = 500 * ((relBonus -1) * 0.1 +1);
                    var riftBonus = riftChance * riftChanceRatio / (10000 * 2) * unicornsPerRift;
                    riftBonus -= baseRift;
                    var amor = unicornsPerSecond * globalRatio * relBonus * paragonRatio * faithBonus * cycle;
                    amor -= total;
                    amor = amor + riftBonus;
                    if(log){
                        console.log(btn.id);
                        console.log("\tBonus unicorns per second: "+amor);
                    }
                    amor = unicornPrice / amor;
                    if(log){
                        var baseWait = unicornPrice / total;
                        var avgWait = unicornPrice / (total + baseRift);
                        var amorSeconds = gamePage.toDisplaySeconds(amor);
                        if(amorSeconds == "")
                            amorSeconds = "NA";
                        console.log("\tMaximum time to build: " + gamePage.toDisplaySeconds(baseWait) + " | Average time to build: " + gamePage.toDisplaySeconds(avgWait));
                        console.log("\tPrice: "+unicornPrice + " | Amortization: "+amorSeconds);
                    }
                    if(amor < bestAmoritization)
                        if(riftBonus > 0 || relBonus > religionRatio && unicornPrice > 0){
                            bestAmoritization = amor;
                            bestBuilding = btn.id;
                        }
                }
            }
        }
        if (bestBuilding != unicornPastureKey)
            bestBuilding = "$religion.zu." + bestBuilding + ".label";
        return this.i18n(bestBuilding);
    },

    getBestAliBuilding: function() {
        var bestBuilding = ["best.none", "$religion.zu.skyPalace.label", "$religion.zu.unicornUtopia.label", "$religion.zu.sunspire.label"];
        if(!this.game.religion.getZU("skyPalace").unlocked)
            return this.i18n(bestBuilding[0]);
            
        var skyPalacePrice =  1.15**(this.game.religion.getZU("skyPalace").val) * 125;
        var unicornUtopiaPrice = 1.15**(this.game.religion.getZU("unicornUtopia").val) * 1000;
        var sunspirePrice = 1.15**(this.game.religion.getZU("sunspire").val) * 750;
        var priceBuilding = [skyPalacePrice, unicornUtopiaPrice, sunspirePrice];

        return this.i18n(bestBuilding[ priceBuilding.indexOf(Math.min(...priceBuilding)) + 1 ]);
    },
    
    getNecrocornsPerSecond: function(){
        var numAlicorns = this.game.resPool.get("alicorn").value;
        var curCorruption = this.game.religion.corruption;
        var blsBoost = 1 + Math.sqrt(this.game.resPool.get("sorrow").value * this.game.getEffect("blsCorruptionRatio"));
        var corruptionRate = 1;
        if(this.game.resPool.get("necrocorn").value > 0)
            corruptionRate = 0.25 * (1+ this.game.getEffect("corruptionBoostRatio"));
        corruptionRate *= this.game.getEffect("corruptionRatio") * blsBoost;
        if(numAlicorns <= 0){
            curCorruption = 0;
            corruptionRate = 0;
        }
        corruptionRate *= this.game.getTicksPerSecondUI();
        corruptionRate = Math.floor(corruptionRate * 100000) / 100000;
        if(corruptionRate == Infinity)
            return this.i18n("infinity");
        return corruptionRate + this.i18n("sec");
    },

    getNecrocornTime: function(){
        var numAlicorns = this.game.resPool.get("alicorn").value;
        var curCorruption = this.game.religion.corruption;
        var blsBoost = 1 + Math.sqrt(this.game.resPool.get("sorrow").value * this.game.getEffect("blsCorruptionRatio"));
        var corruptionRate = 1;
        if(this.game.resPool.get("necrocorn").value > 0)
            corruptionRate = 0.25 * (1 + this.game.getEffect("corruptionBoostRatio"));
        corruptionRate *= this.game.getEffect("corruptionRatio") * blsBoost;
        if(numAlicorns <= 0){
            curCorruption = 0;
            corruptionRate = 0;
        }
        if(corruptionRate == 0)
            return this.i18n("infinity");
        return this.game.toDisplaySeconds( (1 - curCorruption) / (corruptionRate * this.game.getTicksPerSecondUI()) );
    },

    getLeviChance: function(){
        var numPyramids = this.game.religion.getZU("blackPyramid").getEffectiveValue(this.game);
        var numMarkers = this.game.religion.getZU("marker").val;
        var chance = this.roundThisNumber(35 * numPyramids * (1 + 0.1 * numMarkers) / 10);
        chance = Math.round(chance);
        if(chance > 100)
            chance = 100;
        return chance + "%";
    },

    // RELIGION :

    getReligionProductionBonusCap: function(){
        var result =  100 * (10 + this.game.getEffect("solarRevolutionLimit") + (this.game.challenges.getChallenge("atheism").researched ? (this.game.religion.transcendenceTier) : 0)) * (1 + this.game.getLimitedDR(this.game.getEffect("faithSolarRevolutionBoost"), 4));
        result = this.game.getDisplayValueExt(result);
        return result + "%";
    },

    getRecNextTranscendTierProgress: function() {
        if (this.game.religion.transcendenceTier >= 354)
            return this.i18n("best.none");
        var tier = this.game.religion.transcendenceTier + 1;
        var tt = this.game.religion._getTranscendTotalPrice(tier) - game.religion._getTranscendTotalPrice(tier - 1);
        var obelisk = this.game.religion.getTU("blackObelisk").val;
        var obeliskRatio = (tier * 5 * obelisk + 1000) / (this.game.religion.transcendenceTier * 5 * obelisk + 1000);
        var adoreIncreaceRatio = Math.pow((tier + 1) / (tier), 2);
        var needpercent = adoreIncreaceRatio * obeliskRatio;
        var x = tt;
        var k = needpercent;
        var epiphanyRecommend = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) + x + x / (k * k - 1);
        var percent = epiphanyRecommend / tt * 100;
        percent = Math.round(percent * 1000) / 1000;
        return percent + "%";
    },

    getNextTranscendTierProgress: function(){
        var tier = this.game.religion.transcendenceTier + 1;
        var tt = this.game.religion._getTranscendTotalPrice(tier) - game.religion._getTranscendTotalPrice(tier - 1);
        var perc = this.game.religion.faithRatio / tt * 100;
        perc = Math.round(perc * 1000) / 1000;
        return perc + "%";
    },

    getApocryphaAfterAdore: function(){
        const bonusRatio = 1.01;
        let faithRatio = this.game.religion.faithRatio;
        var ttPlus1 = (this.game.religion.getRU("transcendence").on ? this.game.religion.transcendenceTier : 0) + 1;
        faithRatio += this.game.religion.faith / 1000000 * ttPlus1 * ttPlus1 * bonusRatio;
        let apoc = this.game.getUnlimitedDR(faithRatio, 0.1) * 0.1;
        return this.game.getDisplayValue((apoc) * 100) + "%";
    },
    getEffectivePraiseValue: function() {
        var faith = this.game.resPool.get("faith");
        return faith.value * (1 + this.game.religion.getApocryphaBonus()); //starting up from 100% ratio will work surprisingly bad
    },
    getWorshipAfterPraise: function() {
        return this.game.getDisplayValueExt(this.game.religion.faith + this.getEffectivePraiseValue())
    },
    getSolRevBonusAfterPraise: function() {
        // this.game.religion.faith + this.getEffectivePraiseValue()
        var uncappedBonus = this.game.religion.getRU("solarRevolution").on ? this.game.getUnlimitedDR(this.game.religion.faith + this.getEffectivePraiseValue(), 1000) / 100 : 0;
        
        let bonus = this.game.getLimitedDR(uncappedBonus, 10 + this.game.getEffect("solarRevolutionLimit") + (this.game.challenges.getChallenge("atheism").researched ? (this.game.religion.transcendenceTier) : 0)) * (1 + this.game.getLimitedDR(this.game.getEffect("faithSolarRevolutionBoost"), 4));

        return this.game.getDisplayValue(bonus * 100) + "%";
    },

    // PARAGON :

    getParagonProductionBonus: function(){
        var prodRatio = this.game.prestige.getParagonProductionRatio() * 100;
        prodRatio = Math.round(prodRatio * 1000) / 1000;
        return prodRatio + "%";
    },

    getParagonStorageBonus: function(){
        var storeRatio = this.game.prestige.getParagonStorageRatio();
        var singularity = 1 + this.game.getEffect("globalResourceRatio");
        storeRatio = Math.round(storeRatio * 1000 * singularity) / 1000;
        storeRatio = this.game.getDisplayValueExt(storeRatio);
        return storeRatio + "x";
    },
    
    //TIME : 

    getTCPerSacrifice: function(){
        var numTCPerSacrifice = 1;
        numTCPerSacrifice += this.game.getEffect("tcRefineRatio");
        return numTCPerSacrifice;
    },

    getRelicPerTCRefine: function(){
        return 1 + this.game.getEffect("relicRefineRatio") * this.game.religion.getZU("blackPyramid").getEffectiveValue(this.game);
    },
    
    getTradeAmountAvg: function() {
        var tRatio = 1 + this.game.diplomacy.getTradeRatio() + this.game.diplomacy.calculateTradeBonusFromPolicies("leviathans", this.game) + this.game.challenges.getChallenge("pacifism").getTradeBonusEffect(this.game);
        var cal = this.game.calendar;
        var ticksPerYear = cal.ticksPerDay * cal.daysPerSeason * cal.seasonsPerYear;
        var leviathansModel = this.game.diplomacy.get("leviathans");
        var rRatio = 1 + 0.02 * leviathansModel.energy;
        for (var i in leviathansModel.sells){
            if(leviathansModel.sells[i].name == "timeCrystal"){
                var leviathansTrade = (leviathansModel.sells[i].value * leviathansModel.sells[i].chance) / (leviathansModel.buys[0].val)
                break;
            }
        }
        var unobtainium = ticksPerYear * leviathansTrade * this.game.getResourcePerTick("unobtainium");
        var shatter = this.game.getEffect("shatterTCGain") * (1 + this.game.getEffect("rrRatio"));
        var unPerTerade = shatter * unobtainium;
        var perterade = Math.floor(1000 * rRatio * tRatio * unPerTerade) / 1000;
        return perterade;
    },

    getResourceRetrievalTCBackYears: function() {
        var shatterRe = 1 + this.game.getLimitedDR(this.game.getEffect("shatterCostReduction"), 1);
        var RedmoonCycleFestivalRatio = this.game.calendar.cycleEffectsFestival({unobtainium: 1})['unobtainium'];
        var RedmoonCycleEffects = this.game.calendar.cycleEffectsBasics({unobtainiumPerTickSpace: 1}, "moonOutpost")['unobtainiumPerTickSpace'];
        var unobtainiumAvg = this.getTradeAmountAvg() / RedmoonCycleEffects / RedmoonCycleFestivalRatio;
        var heatfactor = this.game.challenges.getChallenge("1000Years").researched ? 5 : 10;
        var ChronoFurnace = 100 / (100 + heatfactor);
        var timeC = unobtainiumAvg - (ChronoFurnace * shatterRe);
        // (5 × 2.4 [Redmoon] + 5 * 2.4 * game.getEffect("festivalRatio") + 5 × 0.9 [Charon] + 8 × 5 [others]) / 50
        var calendar = (56.5 + 12 * game.getEffect("festivalRatio")) / 50;
        var result = calendar * timeC;
        var cost = this.getButtonPrice(game.timeTab.cfPanel.children[0].children, "ressourceRetrieval", "timeCrystal");
        var number = this.game.time.getCFU("ressourceRetrieval").val;
        if (number == 100) {
            return this.i18n("best.none");
        }else if (timeC <= 0){
            return this.i18n("$time.cfu.ressourceRetrieval.label");
        }else {
            var TCBack = Math.ceil(cost * number / result)
            return TCBack;
        }
    },

    // Pollution :
    getPollutionEffects() {
        var pollution = Object.values(this.game.bld.metaCache)
        .map(e => e.meta)
        .flatMap(bld => {
            if (bld.effects === undefined) {
                return [];
            }
            return Object.entries(bld.effects).map(([key, value]) => {
                return {
                    name: bld.name,
                    quantityOn: bld.on,
                    quantity: bld.val,
                    key,
                    value, 
                }
            })
        })
        .filter((e) => /pollution/i.test(e.key));
        return pollution;
    },
    getPerBuildingPollution: function() {
        const pollutionRatio = this.game.bld.getPollutionRatio() * (1 + this.game.getEffect("cathPollutionRatio"));// + this.game.getEffect("cathPollutionPerTickCon");
        let pollution = this.getPollutionEffects();
        let pollutionTable = {};

        for (let {name, key, value, quantity, quantityOn} of pollution) {
            if (!(name in pollutionTable)) {
                pollutionTable[name] = {
                    name, quantity, quantityOn,
                    value: 0,
                };
            }
            if (key === "cathPollutionPerTickProd") {
                pollutionTable[name].value += value * quantityOn * pollutionRatio;
            } else if (key === "cathPollutionPerTickCon") {
                pollutionTable[name].value += value * quantityOn;
            }
        }
        return pollutionTable;
    },
    renderPerBuildingPollutionTable: function(container) {
        let pollution = this.getPerBuildingPollution();

        let table = dojo.create("table", {class: 'statTable'}, container);

        this.renderRow(table,
            {text: "Building", tag: "th"},
            {text: "Per Building", tag: "th"},
            {text: "Quantity", tag: "th"},
            {text: "Total", tag: "th"},
        );


        for (let [name, {quantity, quantityOn, value}] of Object.entries(pollution)) {
            this.renderRow(table,
                {text: $I(`buildings.${name}.label`), tag: "th"},

                this.game.getDisplayValueExt(quantityOn === 0 ? 0 : value / quantityOn * this.game.getTicksPerSecondUI()),
                quantityOn + "/" + quantity,
                this.game.getDisplayValueExt(value * this.game.getTicksPerSecondUI())
            );
        }
    },
    renderPollutionSection: function(container) {
        this.renderPerBuildingPollutionTable(container);

        dojo.create('br', undefined, container);

        let table = dojo.create('table', {class: 'statTable'}, container);

        this.renderRow(table,
            {text: "Net Pollution per Second", tag: "td"},
            this.game.getDisplayValueExt(this.game.bld.cathPollutionPerTick * this.game.getTicksPerSecondUI())
        );
        this.renderRow(table,
            {text:"Total Pollution", tag: "td"},
            (this.game.bld.cathPollution/100e3).toLocaleString() + "ppm"
        );
    },


    // OTHERS : 

    getBestMagnetoBuilding: function() {
        var bestBuilding = ["best.none", "$buildings.magneto.label", "$buildings.steamworks.label"];
        var magneto = this.game.bld.getBuildingExt("magneto").meta;
        var steamworks = this.game.bld.getBuildingExt("steamworks").meta;
        if(!magneto.unlocked || !steamworks.unlocked)
            return this.i18n(bestBuilding[0]);
        var magnetoCount = magneto.val; var steamworksCount = steamworks.val;
        var productionBonus = (1 + (steamworksCount * 0.15)) * (magnetoCount * 2) ;
        var prodBonusMagneto = (1 + (steamworksCount * 0.15)) * ((magnetoCount+1) * 2) ;
        var prodBonusSteam = (1 + ((steamworksCount+1) * 0.15)) * (magnetoCount * 2) ;
        var magnetoValue = (prodBonusMagneto - productionBonus) / 100 ;
        var steamworksValue = (prodBonusSteam - productionBonus) / 100 ;
        if(magnetoValue > steamworksValue)
            return this.i18n(bestBuilding[1]);
        else if (steamworksValue > magnetoValue)
            return this.i18n(bestBuilding[2]);
        return this.i18n(bestBuilding[0]);
    },
    
    getUraniumForThoriumReactors: function(){
        var needed = 250 * .1875 * this.game.bld.getBuildingExt("reactor").meta.val;
        needed /= 1 + this.game.getResCraftRatio({name:"thorium"});
        needed = Math.round(needed * 1000) / 1000;
        return needed;
    },

    getBestRelicBuilding: function() {
        if (!this.game.religion.getZU("blackPyramid").val) {
            return this.i18n("$religion.zu.blackPyramid.label");
        }
        if (this.game.religionTab.zgUpgradeButtons.length == 0) {
            return this.i18n("best.none");
        }
        var next;
        var cs = Math.floor(Math.log((15 + this.game.religion.getZU("blackPyramid").getEffectiveValue(this.game)) / 5) / Math.log(1.15)) + 1;
        var cs1 = 0;
        var cs2 = Math.ceil(this.getButtonPrice(this.game.religionTab.zgUpgradeButtons, "blackPyramid", "sorrow")) - this.game.resPool.get("sorrow").maxValue;
        var bnexus = this.getButtonPrice(this.game.religionTab.ctPanel.children[0].children, "blackNexus", "relic");
        var bcore = this.getButtonPrice(this.game.religionTab.ctPanel.children[0].children, "blackCore", "relic");
        var a = (Math.pow(1.15, cs2) - 1) / 0.15 * bcore;
        var bnexusup = 0.001 * cs / bnexus;
        var bcoreup = 0.001 * this.game.religion.getTU("blackNexus").val / a;
        if (cs2 > 0 && bnexusup >= bcoreup) {
            while (bnexusup >= bcoreup && bnexus < Number.MAX_VALUE / 1.15) {
                bnexus *= 1.15;
                bnexusup = 0.001 * cs / bnexus;
                bcoreup += 0.001 / a;
                cs1++;
            }
            next = this.i18n("$religion.tu.blackNexus.label") + " " + cs1 + "x";
        } else {
            next = this.i18n("$religion.tu.blackCore.label") + " " + cs2 + "x";
            if (cs2 < 1) {
                next = this.i18n("$religion.zu.blackPyramid.label");
            }
        }
        return next;
    },
    
    getDarkFutureYears: function(){
        var yearsLeft = this.game.calendar.darkFutureYears(true);
        return yearsLeft < 0 ? this.game.getDisplayValueExt(-yearsLeft) : this.i18n("done");
    },

    getAIlv15Time: function(){
        if (this.game.science.getPolicy("transkittenism").researched) {
            return this.i18n("best.none");
        }
        var lv15Gflops = Math.exp(14.5);
        var gflopsHave = this.game.resPool.get("gflops").value;
        var gflopsproduction = this.game.getEffect("gflopsPerTickBase") - this.game.getEffect("gflopsConsumption");
        if (this.game.bld.get("aiCore").effects["aiLevel"] >= 15)
            return this.i18n("done");
        if (gflopsproduction > 0)
            return this.game.toDisplaySeconds((lv15Gflops - gflopsHave) / (gflopsproduction * this.game.getTicksPerSecondUI()));//修复函数
        else
            return this.i18n("infinity");
    },
    
    getfutureSeason: function(){
        var TemporalParadox = this.game.calendar.futureSeasonTemporalParadox;
        if (this.game.bld.get("chronosphere").on == 0) {
            return this.i18n("best.none");
        } else if (TemporalParadox == -1) {
            var time = 1;
        } else {
            var time = TemporalParadox + 1;
        }
        return time;
    },
    
    //==============================================================================================================================================
    //Finally done with calculation functions, now to get down to adding it to the stats tab
    //==============================================================================================================================================
    
    stats: {
        /*
        catnip: [
            {
                name: "getCatnipInWarmSpring",
                // title: "During Warm Spring",
                val: 0,
            },
            {
                name: "getCatnipColdWinter",
                // title: "During Cold Winter",
                val: 0,
            }
        ],
        //*/
        science: [
            {
                name: "getCelestialPerDay",
                // title: "Chance of Celestial Events",
                val: 0,
            },
            {
                name: "getCelestialAutoSuccess",
                // title: "Celestial Event Auto Success Rate",
                val: 0,
            },
            {
                name: "getMaxComped",
                // title: "Maximum Helpful Compediums",
                val: 0,
            },
            {
                name: "getBlueprintCraft",
                // title: "Blueprints Per Craft",
                val: 0,
            }
        ],
        titanium: [
            {
                name: "getTitPerZebraTrade",
                // title: "Titanium Per Zebra Trade",
                val: 0,
            },
            {
                name: "getZebraTradesLeftToMaxTit",
                // title: "Trades Left to Cap Titanium",
                val: 0,
            },
            {
                name: "getZebraTradesToMaxTit",
                // title: "Max Zebra Trades to Cap Titanium",
                val: 0,
            },
            {
                name: "getZebraTitTradeChance",
                val: 0,
            }
        ],
        unicorns: [
            {
                name: "getBestUniBuilding",
                // title: "Best Unicorn Building",
                val: 0,
            },
            {
                name: "getBestAliBuilding",
                // title: "Best Alicorn Building Per Ivory Cost",
                val: 0,
            },
            {
                name: "getNecrocornsPerSecond",
                // title: "Necrocorns Per Second",
                val: 0,
            },
            {
                name: "getNecrocornTime",
                // title: "Time Until Next Necrocorn",
                val: 0,
            },
            {
                name: "getLeviChance",
                // title: "Chance per year of Leviathans",
                val: 0,
            },
        ],
        religion: [
            {
                name: "getReligionProductionBonusCap",
                // title: "Solar Revolution Limit",
                val: 0,
            },
            {
                name: "getNextTranscendTierProgress",
                // title: "Apocrypha Progress",
                val: 0,
            },
            {
                name: "getRecNextTranscendTierProgress",
                // title: "Progress to Next Transcendence Tier",
                val: 0,
            },
            {
                name: "getApocryphaAfterAdore",
                val: 0,
            },
            {
                name: "getEffectivePraiseValue",
                val: 0,
            },
            {
                name: "getWorshipAfterPraise",
                val: 0,
            },
            {
                name: "getSolRevBonusAfterPraise",
                val: 0,
            },
        ],
        paragon: [
            {
                name: "getParagonProductionBonus",
                // title: "Production Bonus",
                val: 0,
            },
            {
                name: "getParagonStorageBonus",
                // title: "Storage Bonus",
                val: 0,
            },
        ],
        time: [
            {
                name: "getTCPerSacrifice",
                // title: "Time Crystals per Sacrifice",
                val: 0,
            },
            {
                name: "getRelicPerTCRefine",
                // title: "Relics Per Time Crystal Refine",
                val: 0,
            },
            {
                name: "getTradeAmountAvg",
                // title: "Blazars for Shatter Engine",
                val: 0,
            },
            {
                name: "getResourceRetrievalTCBackYears",
                // title: "Blazars for Shatter Engine",
                val: 0,
            },
        ],
        others: [
            {
                name: "getBestMagnetoBuilding",
                // title: "Best Magneto/Steamwork Building",
                val: 0,
            },
            {
                name: "getUraniumForThoriumReactors",
                // title: "Uranium/Sec for Thorium Reactors",
                val: 0,
            },
            {
                name: "getDarkFutureYears",
                // title: "Years untile Dark Future",
                val: 0,
            },
            {
                name: "getBestRelicBuilding",
                //title: "Besting building for increase relic",
                val: 0,
            },
            {
                name: "getAIlv15Time",
                val: 0,
            },
            {
                name: "getfutureSeason",
                val: 0,
            }
        ]  
    },

    statDefinitions : [
        {
            name: "catnip",
            // title: "Catnip / Sec"
            useFunction: "renderCatnipTable",
        },
        {
            name: "science",
            // title: "Science"
        },
        {
            name: "trade",
            useFunction: "renderTradeInfo",
        },
        {
            name: "titanium",
            // title: "Titanium"
        },
        {
            name: "unicorns",
            // title: "Unicorns"
        },
        {
            name: "religion",
            // title: "Religion"
        },
        {
            name: "paragon",
            // title: "Paragon Bonus"
        },
        {
            name: "time",
            // title: "Time"
        },
        {
            name: "pollution",
            useFunction: "renderPollutionSection",
        },
        {
            name: "others",
            // title: "Others"
        }
    ],
    
    statGroups: null,
    
    constructor: function(game, i18ng, lang){
        this.game = game;
        this.i18ng = i18ng;
        this.statGroups = [];
        var self = this;
        if (lang && this.i18nData[lang])
            this.lang = lang;
        else
            this.lang = "en";
            
        this.statDefinitions.forEach(
            function(statDefinition) {
                self.statGroups.push(
                    {
                        group: self.stats[statDefinition.name],
                        title: self.i18n(statDefinition.name),
                        useFunction: statDefinition.useFunction,
                    }
                )
            }
        )
        
        for(var i in this.statGroups){
            for(var j in this.statGroups[i].group){
                this.statGroups[i].group[j].calculate = this[this.statGroups[i].group[j].name];
            }
        }
    },

    renderRow: function(parent, ...cells) {
        let tr = dojo.create("tr", undefined, parent);
        for (let value of cells) {
            if (typeof(value) !== "object") {
                let node = dojo.create("td", undefined, tr);
                node.textContent = value;
            } else {
                let nodeName = value.tag ?? "td";
                let node = dojo.create(nodeName, undefined, tr);
                node.textContent = value.text;
            }
        }
        return tr;
    },
    
    getStat: function(name){
        return this[name]();
    },
    
    save: function(saveData){
    },
    
    load: function(saveData){
    },
    
    resetState: function(){
    }
});

dojo.declare("classes.tab.NummonTab", com.nuclearunicorn.game.ui.tab, {
    
    container: null,
    
    constructor: function(tabName){
    },
    
    render: function(content){
        this.container = content;
        
        this.update();
    },
    
    update: function(){
        dojo.empty(this.container);
        
        for(var idx in this.game.nummon.statGroups){
            var statGroup = this.game.nummon.statGroups[idx];
            dojo.create("h1", {
                innerHTML: statGroup.title
            }, this.container);

            if (typeof(statGroup.useFunction) === 'string') {
                this.game.nummon[statGroup.useFunction](this.container);
                continue;
            }

            var stats = statGroup.group;
            var table = dojo.create("table", {class: 'statTable'}, this.container);
            
            for(var i in stats){
                var stat = stats[i];
                var val = stat.val;
                if(val == Infinity)
                    val = "Infinity";
                
                stat.val = this.game.nummon[stat.name]();
                
                var tr = dojo.create("tr", null, table);
                dojo.create("td", {
                    innerHTML: this.game.nummon.i18n(stat.name)
                }, tr);
                dojo.create("td", {
                    innerHTML: typeof val == "number" ? this.game.getDisplayValueExt(val) : val
                }, tr);
            }
        }
    }
});

NummonInit = function(){
    var i18ng = $I;
    var lang = localStorage["com.nuclearunicorn.kittengame.language"];
    var managers = [
        {
            id: "nummon", class: "NummonStatsManager"
        }
    ];
    for(var i in managers){
        var manager = managers[i];
        if(gamePage[manager.id] == undefined){
            gamePage[manager.id] = new window["classes"]["managers"][manager.class](gamePage, i18ng, lang);
            gamePage.managers.push(gamePage[manager.id]);
        }
        else{
            gamePage[manager.id] = new window["classes"]["managers"][manager.class](gamePage, i18ng, lang);
        }
    }
    
    gamePage.nummonTab = new classes.tab.NummonTab({name: "Nummon", id: "Nummon"}, gamePage);
    gamePage.nummonTab.visible = true;
    var tabExists = false;
    for(var i in gamePage.tabs)
        if(gamePage.tabs[i].tabName == "Nummon"){
            gamePage.tabs[i] == gamePage.nummonTab;
            tabExists = true;
        }
    if(!tabExists)
        gamePage.addTab(gamePage.nummonTab);
    
    gamePage.getTab = function(name){
        switch(name) {
            case "science":
                return this.libraryTab;
            case "village":
                return this.villageTab;
            case "workshop":
                return this.workshopTab;
            case "space":
                return this.spaceTab;
            case "stats":
                return this.statsTab;
            case "nummon":
                return this.nummonTab;
            case "time":
                return this.timeTab;
            case "challenges":
            	return this.challengesTab;
        }
    };
    
    gamePage.ui.render();
}

NummonTryInit = function() {
    if (typeof gamePage === "undefined") {
        setTimeout(function(){
            NummonTryInit();
        }, 2000);
    } else {
        NummonInit();
    }
}

NummonTryInit();
