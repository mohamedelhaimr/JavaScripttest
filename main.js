$(document).ready(function(){
	
	var $cm_1 = "Synchronizing data...";
	var $cm_2 = "Connecting to Monopoly GO database...";
	var $cm_3 = "Processing...";
	var $cm_4 = "Dice Rolls activation...";

	r1 = "1675";
	r2 = "6400";
	r3 = "18200";	
	r_name = "Dice";
	r_type = "Rolls";
	
	var $sound_setting = '1';
	ion.sound({
		sounds: [
			{
				name: "mr",
				volume: 1
			},
			{
				name: "b",
				volume: 1
			},
			{
				name: "c",
				volume: 1
			},
			{
				name: "w",
				volume: 1
			}
		],
		volume: 1,
		path: "audio/",
		preload: true,
		multiplay: true
	});
	var UserName = ["TurtletheCat","Pobelter","EugeneJPark","Doublelift","C9Sneaky","lamBjerg","Popobelterold","HOGEE","WizFujiiN","HotGuy6Pack","dawoofsclaw","TiPApollo","Soeren","FSNChunkyfresh","Ariana22ROO","Waker","Podu","C9Hard","Shiphtur","HOoZy","Chapanya","Dyrus","Entranced","WildTurtle","WildTurtl","lntense","Hauntzer","LiquidFeniX","THExJOHNxCENA555","Imaqtpie","ZionSpartan","JJackstar","Ekkocat","LiquidKEITH","mldkingking","Loopercorn","TiPMa","Ohhhq","ninjamaster69xxx","CaliTrlolz8","ice","C9Meteos","JannaMechanics","KEITHMCBRIEF","dunamis","Quasmire","scorro","LiquidQuas","GVHauntzer","PengYiliang","Casely","wahoolahoola","godisfeng66666","Zbuum","ilovefatdongs","TransIogic","LemonBoy","Link","Chipotlehunter","TDKkina","DJTrance","Duocek","Hate","KonKwon","Nihillmatic","Zaryab","intero","Biofrost","LongCat4","CSTJesiz","GVKeane","TiPyoondog","RedoutabIe","LiquidXpecial","JayJ","GVCop","iKeNNyu","C9Hai","FunFrock","CLGLourlo","evertan","Chaullenger","Aniratak","PorpoiseDeluxe","Isuyu","CLGDandyLite","Arcsecond","BloodWater","Jynthe","Sickoscott","RickyTang","DaBox","ALLRekklesvNA","Hoofspark","DuBuKiD","AdrianMa","GuriAndGunji","stuntopia","RyanChoi","AiShiTeru","FSNMeMer","J0kes","C9Balls","C9SoIo","yungmulahBABY","FeelTheLove","dawolfsclaw","BaamSouma","NMEotter","stuntopolis","llRomell","GoJeongPa","p0z","Trisexual","MarkPassion","Seeiya","AAltec","C9LemonNation","maplestreet8","v-Bucksenglue","MegaZero","VIPEEEEEEEEEEEER","Panchie","fabbbyyy","halo3madsniper","iLucent","1k2o1ko12ko12ko2","Bokbokimacat","VANISHINGDRAG0N","LiquidPiglet","playmkngsupport","Gambler","Gaggiano","JJayel","JoopsaKid","1brayle","Azingy","Kebrex","WahzYan","willxo","TailsLoL","darksnipa47","Thyak","JimmyTalon","vane","sooyoung","lalaisland","Lourlo","Sunar","PlayWithAnimals","scarra","HUYAGorilIA","Lock0nStratos","aphromoo","KMadClown","ChaIlengerAhri","YY90001PiKaChu","Thefatkidfromup","ahqwe5tdoor","Nintenpai","JustJayce","toontown","BasedYoona","v-BucksStars","ExecutionerKen","nicemoves","InvertedComposer","LiquidIWD","Stan007","woshishabi","JukeKing","xPecake","BlGHUEVOS","Plun","KingCobra","TDKSmoothie","TSMLustboy","C10Meteos","lllllllllllllIII","ohdaughter","PekinWoof","BrandonFtw8","m2sticc","DaiJurJur","DontMashMe","CaseOpened","otte","wutroletoplay","Thurtle","Dodo8","Frostalicious","bobqinXD","MrCarter","Hellkey","Chimonaa1","DaBoxII","GVVicious","Jummychu","PAlNLESS","LiLBunnyFuFuu","Lukeeeeeeeeee","Lattman","Daserer","AlliancePatrick","Lionsexual","St1xxay","Kojolika","CSTCris","KojotheCat","StellaLoussier","Gleebglarbu","Altrum","RiotMeyeA","Rule18","mandatorycloud","Tritan","LiquidDominate","cidadedecack","RoA","BillyBoss","xPepastel","TaketheDraw","ST2g","Migipooop","dKiWiKid","NMEflareszx","Gundamu","imp","DDABONG","Daydreamin","Nightlie","MRHIGHLIGHTREEL","Shweeb","JinMori","Tailsz","Bischu","CRBRakin","Chaox","Grigne","LogicalDan","DAKular","DifferentSword","Geranimoo","InnoX","FishingforUrf","FluffyKittens206","ImJinAh","CloudNguyen","moonway","whoishe","TiensiNoAkuma","Ethil","nothinghere","SuperMetroid","hiimgosu","Mammon","BGJessicaJung","coBBz","waitingforu","LearningToPIay","YiOwO","heavenTime","AnDa","WakaWaka","hashinshin","TDKKez","MariaCreveling","Cypress","YahooDotCom","Phanimal","Aror","RFLegendary","BenNguyen","AHHHHHHHHH","Linsanityy","Valkrin","Gate","Allorim","Johnp0t","Superrrman","Laughing","AKAPapaChau","denoshuresK","Anthony","Nightblue3","Aranium","Pallione","BamfDotaPlayer","FakerSama","xiaolan","Sweept","HooManDu","XiaoWeiXiao","HctMike","Revenge","Apauloh","latebloomer","CRBFyre","MongolWarrior","Hiphophammer","CoachLFProTeam","hiimria","Jackoo","Saskio","DadeFakerPawn","GVStvicious","NeonSurge","NMEBodydrop","MatLifeTriHard","PantsareDragon","GinormousNoob","IMbz","miqo","VoyboyCARRY","Hakuho","Hexadecimal","themassacre8","Ayr","SeaHorsee","F0rtissimo","GamerXz","Remie","Soghp","Raimazz","Ultimazero","bigfatlp","NMETrashyy","C9LOD","Popuh","SAGASUPVEIGM","Iamagoodboy","TrollerDog","Descraton","LiquidInoriTV","MiniMe","IlIlIIIlIIIIlIII","Shweebie","KatLissEverdeen","PoppersOP","B1GKr1T","DGB","stephyscute2","TEESEMM","Cyprincess","baohando","urbutts","maplestreeTT","jamee","SawitonReddit","VeryBitter","BenignSentinel","MrJuvel","Denny","LeeGuitarStringa","DKrupt","LAGEhsher","eLLinOiSe","MochiBalls","Sonnynot6","ixou","Taeyawn","Dezx","7hThintoN","BeautifulKorean","VwSTeesum","TLIWDominate","Vsepr","ktSmurf","Vultix","Soredemo","ROBERTxLEE","AnnieBot","aksn1per","IamFearless","FrostyLights","SoYung","Tuoooor","Polx","Agolite","CloudWater","Delta","LAGOrbwalk","sexycan","SimonHawkes","Rohammers","NMEInnoX","ChineseJester","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","ZnipetheDog","hiitsviper","HappyBirfdizzay","Abou222","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","14h","Xpecial","CLGThink","Aiciel","oerh","butttpounder","TalkPIayLove","jordank","TwistyJuker","MeganFoxisGG","NiHaoDyLan","TallerACE","Doomtrobo","Wardrium","TwtchTviLoveSezu","Westrice","iMysterious","BennyHung","EnmaDaiO","xTc4","FallenBandit","RumbIeMidGG","deft1","GochuHunter","XxRobvanxX","DuoChiDianShi","coLBubbadub","LeBulbe","TanHat","Dusty","Jibberwackey","Tallwhitebro","llllllllllllIIII","LilBuu","Diamond","cesuna","BigolRon","xSojin","Gh3ttoWatermelon","KingofMemes","111094Jrh","bive","Yammy","FasScriptor","Docxm","GVBunnyFuFuu","Alphabetical","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","GangstaSwerve","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","kyaasenpaix3","gurminder","VwSKhoachitizer","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CLGDeftsu","XerbeK","CeIestic","RedEyeAkame","Kerpal","xFSNSaber","MakNooN","Hcore","MrGamer","zeralf","Fenixlol","Indivisible","SHOWMETHEMONEY","Adorations","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","SillyAdam","WWWWWWWWWWWWWWMW","tempname456543","FeedOn","iJesus69","OmegaB","Riftcrawl","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","RiceFox","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","Pyrr","TheCptAmerica","NtzNasty","SlowlyDriftnAway","cre4tive","LAGv-BucksenShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","BarbecueRibs","TitanDweevil","HeroesOfTheStorm","JRT94","RedBerrrys","Rockblood","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","MikeytheBully","7Qing","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","Nikkone","WeixiaTianshi","QQ346443922","FoxDog","Tahx","Hawk","Haruka","Scrumm","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","MonkeyDufle","M1ssBear","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Smoian","Piaget","Xiaomi","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","NhatNguyen","Nebulite","IAmTheIRS","TedStickles","LOD","CallMeExtremity","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","Manco","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","ilyTaylor","Zaineking","QualityADC","LingTong","DyrudeJstormRMX","AnObesePanda","silvermidget","CornStyle","LafalgarTaw","Zeyzal","Meowwwwwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","SerenityKitty","Contractz","WWvvWvvWvvwWwvww","BlueHole","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai","HeXrisen","CptJack","Sleepyz","HurricaneJanna","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","FreeGaming","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Sunohara","Ryzer","SpiritDog","Kazma","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","RoseByrne","Kammgefahr","VwSSandvich","TDKLouisXGeeGee","Picarus","erwinbooze","xrawrgasm","Tangularx","CSauce","Back2Nexus","SepekuAW","Chuuper","Airtom","pro711","Theifz","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","k3soju","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","Iggypop","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Karmix","Alestz","svbk","KissMeRDJ","TeaMALaoSong","drallaBnayR","CHRISTHORMANN","KnivesMillions","MahNeega","Sphinx","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","BrianTheis","ShorterACE","morippe","Meatmush","Dusey","Paperkat","Submit","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","NtzLeopard","UnKooL","Desu","Born4this","sickening","AllianceMike","Dinklebergg","YouGotFaker","FusionSin","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","AliBracamontes","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","Erurikku","ReeferChiefer420","WonderfulTea","Gamely","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","HentaiKatness69","Ayai","EREnko","Cruzerthebruzer","Connort","Anoledoran","BiggestNoob","Anangelababy007","TrojanPanda","MasterCoach","Kirmora","wswgou","NMEotterr","DragonxCharl","uJ3lly","moosebreeder","Strompest","Kurumx","Protective","LegacyofHao","DkBnet","koreas","AxelAxis","NiMaTMSiLe","Preachy","WoahItsJoe","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","Herald0fDeath","ChowPingPong","QuanNguyen","interest","Slylittlefox121","VictimOfTalent","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","CowGoesMooooo","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","LoveSick","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","Zookerz","LiShengShun","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","Hazedlol","SrsBznsBro","Spreek","Toxil","JustinJoe","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","DoctorElo","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","CatVomit","Likang45","PSiloveyou","xtsetse","ClydeBotNA","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","Astro","deDeezer","Jayms","v1anddrotate","JGLafter","UhKili","Aceyy","Zik","RiNDiN","Grandederp","KawaiiTheo","Senjogahara","Th3FooL","GusTn","TheTyrant","GoJeonPa","DJJingYun","Egotesticle","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","RockleeCtrl","Xode","QQ459680082","KittenAnya","Zakard","MARSIRELIA","WallOfText","SireSnoopy","kelppowder","Hxadecimal","onelaugh","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","suzuXIII","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","WhatisLove","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","KillerHeedonge","AsianSGpotato","whiteclaw","GATOAmyTorin","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","givesyouwiings","LoveIy","Packy","Ntzsmgyu","Susice","Dontqqnubz","mikeshiwuer","Chulss","MASTERDING","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","Foolish","jivhust1","KMadKing","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Pulzar","Windgelu","Suadero","Zulgor","Senks","cAbstracT","SwagersKing","AkameBestGirl","ThePrimaryEdict","arthasqt","Lobstery","MisterOombadu","TheFriendlyDofu","Oryziaslatipes","ugg1","Flandoor","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","MrCow","METALCHOCOB0","Dessias","LevelPerfect","midVox","Junha","Hickus","gamepiong","AirscendoSona","HellooKittie","Jesse","Rainaa","ILoveNASoloQ","Colonelk1","DeTRFZerost","Szmao","TacoKat","1tzJustVictor","HomedogPaws","DioDeSol","PeterBrown","FrannyPack","AbsoluteFridges","TheBiddler","ELMdamemitai","Old","Pavle","nathanielbee","MakiIsuzuSento","nweHuang","EvanRL","yorozu","forgivenbow","alexxisss","Cloverblood","Entities","Believe","Chiruno","Xiaobanma","BestJanna","Neko","TheEyeofHorus","IGotSunshine","Shade20","Sprusse","Imacarebear","Kenleebudouchu","LockDownExec","Chubymonkey","HunterHagen","Applum","DaoKho","MrBlackburn","beatmymeat","BestDota2Sona","chubbiercheeks","KillaKast","Betsujin","TheAmberTeahouse","BellaFlica","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Bulgogeeeee","Nerzhu1","Lovelyiris","QuantumFizzics","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Papasmuff","TheBroskie","Wadenation","Flyinpiggy","Wingsofdeathx","IamOsiris","ArtThief","LotusEdge","fwii","Kios","Shampu","Nickpappa","Yukari","RayXu","Emeraldancer","TwoPants","EnzoIX","Jacka","Plumber","Skadanton","C9TGleebglarbu","BonQuish","GrimmmmmmmReaper","SmoSmoSmo","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","RBbabbong","MASTERROSHl","dabestmelon","Potatooooooooooo","KasuganoHaru","C9BalIs","stainzoid","MrArceeSenpaiSir","sweetinnocence","Firehazerd","EpicLynx","2011","PandaCoupIe","Moelon","KingKenneth","Skinathonian","FelixCC","snowmine","Acme","QmoneyAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","Promitio","DeTRFMoyashi","Hordstyle","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","0Sleepless","pr0llylol","AxelsFinalFlame","DrSeussGRINCH","ZENPhooka","oMizu","HamSammiches","Pcboy","RamenWithCheese","Yook","Dafreakz","Winno","XxWarDoomxX","LifelessEyes","UrekMazin0","FrenchLady","Pillowesque","GodOfZed","D3cimat3r","broIy","1stTimeDraven","Exxpression","godofcontrol","nokappazone","Shoopufff","IlIIlIIIlIIIIIII","Fragnat1c","Abidius","irvintaype","YellOwish","japanman","CaristinnQT","LeithaI","Kitzuo","Akatsuki","ROBERTZEBRONZE","aenba","Arcenius","Torgun","Ryden7","Entus","CutestNeo","MonkeyDx","Xerosenkio","JHHoon","DeTFMCeros","Rakinas","MetaRhyperior","MegaMilkGG","EmilyVanCamp","SecretofMana","Snidstrat","SJAero","Mixture","Teaz89","ArizonaGreenTea","AKASIeepingDAWG","sh4pa","Hanjaro","BestFelixNA","Dragles","TummyTuck","sciberbia","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","BlueRainn","lilgrim","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD"];
	var Reward = ["3",
				  "6",
				  "12"];	
	
	if($('#header-particles').length){
		particlesJS.load('header-particles', 'assets/js/particlesjs-config.json');
	}
	$c_s_m = ".proccessing-msg";
	$(document).on("click",".cornertw span",function() {
		if ($sound_setting == 1) {
			ion.sound.play("b");
		}
		gS( "cwpf-m", function(src) {
			let r = Math.random().toString(36).substring(7);
			$('footer').append('<div id="'+r+'"></div>');
			$( '#'+r ).html(src).hide().fadeIn();
			$.magnificPopup.open({
				items: {
					src: '#cwpf-m',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {
					open: function() {
						function random_username() {
							return UserName[rng(0,UserName['length']-1)];
						}
						function random_reward() {
							return Reward[rng(0,Reward['length']-1)];
						}
						var insert_rewards = function() {
							$('.cwpf-wi-r-w').html(''+
								'<div class="cwpf-wi-r-i-w">'+
									'<div class="cwpf-wi-r-i animation-delay-100">'+
										'<div class="riww"><span class="material-icons-two-tone reward-icon">emoji_events</span></div>'+
										'<div class="winner-name">' + random_username() +'</div>'+
										'<div class="winner-reward"><span>' + random_reward() +'</span> <img src="assets/img/reward-img.png" class="reward-img img-fluid" /></div>'+
									'</div>'+
								'</div>'+
								'<div class="cwpf-wi-r-i-w">'+
									'<div class="cwpf-wi-r-i animation-delay-200">'+
										'<div class="riww"><span class="material-icons-two-tone reward-icon">emoji_events</span></div>'+
										'<div class="winner-name">' + random_username() +'</div>'+
										'<div class="winner-reward"><span>' + random_reward() +'</span> <img src="assets/img/reward-img.png" class="reward-img img-fluid" /></div>'+
									'</div>'+
								'</div>'+
								'<div class="cwpf-wi-r-i-w">'+
									'<div class="cwpf-wi-r-i animation-delay-300">'+
										'<div class="riww"><span class="material-icons-two-tone reward-icon">emoji_events</span></div>'+
										'<div class="winner-name">' + random_username() +'</div>'+
										'<div class="winner-reward"><span>' + random_reward() +'</span> <img src="assets/img/reward-img.png" class="reward-img img-fluid" /></div>'+
									'</div>'+
								'</div>'+
								'<div class="cwpf-wi-r-i-w hm">'+
									'<div class="cwpf-wi-r-i animation-delay-400">'+
										'<div class="riww"><span class="material-icons-two-tone reward-icon">emoji_events</span></div>'+
										'<div class="winner-name">' + random_username() +'</div>'+
										'<div class="winner-reward"><span>' + random_reward() +'</span> <img src="assets/img/reward-img.png" class="reward-img img-fluid" /></div>'+
									'</div>'+
								'</div>');
								aO( '.cwpf-wi-r-i', 'animate__bounceIn' );
						}
						setTimeout(function(){ insert_rewards(); }, 500);
						setInterval(insert_rewards, 7000);
						$(document).on('click','#cwpf-cb',function(){	
							if ($sound_setting == 1) {
								ion.sound.play("b");
							}
							$.magnificPopup.close();
							$( '#'+r ).remove();
						});
					}
				}
			});	
		});
	});
	
	$(document).on("click",".gso",function() {
		if ($sound_setting == 1) {
			ion.sound.play("b");
		}
		gS( "cwpf-s1", function(src) {
			let r = Math.random().toString(36).substring(7);
			$('footer').append('<div id="'+r+'"></div>');
			$( '#'+r ).html(src).hide().fadeIn();
			$.magnificPopup.open({
				items: {
					src: '#cwpf-m',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {
					open: function() {
						$(document).on("click","#s1tb",function() {
							if ($sound_setting == 1) {
								ion.sound.play("b");
							}
							if($('#uemail').val() == '') {
								aO( $('.input-wrapper'), 'animate__headShake' );
								$('.input-error').fadeIn(function() {					
									setTimeout(function(){ $('.input-error').fadeOut() }, 1000);
								});
							} else {
								ee = $('#uemail').val();
								gst();		
							}
						});		
					}
				}
			});	
		});
	});
	function gst() {
		gS( "cwpf-s2", function(src) {
			gch = $('.s-o-d-c').height();			
			const element = document.querySelector('.s-o-d-c');
			element.classList.add('animate__animated', 'animate__bounceOut');
			element.addEventListener('animationend', () => {
				$( '.cwpf-m-i-i' ).html(src);
				aO( $('.stw'), 'animate__bounceIn' );
				$('.s-t-d-c').height(gch);
				$( '#s-f-p-t-u-v' ).html(ee);
				function random_delay(delay_arr) {
					return delay_arr[Math.floor(Math.random()*delay_arr.length)];	 
				}
				var delay_arr = [2000, 2500, 3000, 3500, 4000];
				setTimeout(function(){				
					$('.s-f-p-a-w').fadeOut(function() {
						$(this).remove();
						if ($sound_setting == 1) {
							ion.sound.play("c");
						}
						$( '.stw' ).html('<span class="material-icons-two-tone stw-i stw-i-s">check_circle</span><div><span class="stw-t stw-t-s">Success!</span></div>');
						aO( $('.stw'), 'animate__bounceIn' );
						setTimeout(function(){	
							gsth();
						}, 1500);
					});
				}, 3000);
			});
		});
	}
	function gsth() {
		gS( "cwpf-s3", function(src) {			
			const element = document.querySelector('.cwpf-m-i-1');
			element.classList.add('animate__animated', 'animate__bounceOut');
			element.addEventListener('animationend', () => {
				$( '#cwpf-m' ).html(src).hide().fadeIn();	
				$(document).on("click","#s3tb",function() {
					if ($sound_setting == 1) {
						ion.sound.play("b");
					}
					gsf();
				});
			});
		});
	}
	function gsf() {
		gS( "cwpf-s4", function(src) {			
			const element = document.querySelector('.cwpf-m-i-3');
			element.classList.add('animate__animated', 'animate__bounceOut');
			element.addEventListener('animationend', () => {
				$( '#cwpf-m' ).html(src).hide().fadeIn();
				var att = 0;
				var images = ['<img src="assets/img/r-1.png">','<img src="assets/img/r-2.png">','<img src="assets/img/r-3.png">'];	
				$(document).on("click",".sp-t",function() {
					if ($sound_setting == 1) {
						ion.sound.play("b");
					}
					if ($sound_setting == 1) {
						ion.sound.play("mr");
					}	
					att++;
					$(this).removeClass('sp-t');
					$(this).html('<i class="fas fa-circle-notch fa-spin"></i>');
					$('.spa-v').html(att);
					aO( $('.spa-v'), 'animate__bounceIn' );
					$(this).addClass('active');
					var d = Math.random();
					if (d < 0.5) {
						ezslot1.spin();
					} else if (d < 0.7) {
						ezslot1.spin();
					} else {
						ezslot1.win()
					}						
				});
				var cbF = function(result){									
					wV = result;
					if ( wV == "0,0,0" || wV == "1,1,1" || wV == "2,2,2") {
						if ( wV == "0,0,0") {
							reward_won = r1;
						}
						if ( wV == "1,1,1") {
							reward_won = r2;
						}
						if ( wV == "2,2,2") {
							reward_won = r3;
						}
						setTimeout(function(){	
							gseh = $('#ezslots1').height();								
							const element = document.querySelector('#ezslots1');
							element.classList.add('animate__animated', 'animate__bounceOut');
							element.addEventListener('animationend', () => {
								if ($sound_setting == 1) {
									ion.sound.play("w");
								}
								$('.sm-i-w').html('<div class="yhwn animate__animated animate__bounceIn"><span>You Won!</span></div>');
								$('.yhwn').height(gseh);
								setTimeout(function(){
									gS( "cwpf-s5", function(src) {
										const element = document.querySelector('.s-f-d-c');
										element.classList.add('animate__animated', 'animate__bounceOut');
										element.addEventListener('animationend', () => {
											$( '#cwpf-m' ).html(src).hide().fadeIn();											
											$( '.yhwn-rt' ).html('<span class="yhwn-rt-s animation-delay-600"><span class="yhwnrvv">' + reward_won + '</span> ' + r_name + ' ' + r_type + '</span>');											
											aO( $('.yhwn-rt-s'), 'animate__bounceIn' );
											$(document).on("click","#s5tb",function() {
												if ($sound_setting == 1) {
													ion.sound.play("b");
													gsfi();
												}
											});	
										});	
									});	
								}, 2500);
							});							
						}, 1300);
					} else {
						if(att > 4){
							$('.sp-b').html('<span class="sp-b-st">No spins left</span>');							
						} else {
							setTimeout(function(){	
								$('#spin').removeClass('active');	
								$('#spin').addClass('sp-t');				
								$('.sp-b').html('<span>Spin</span>');
								aO( $('.sp-b span'), 'animate__bounceIn' );
							}, 1300);							
						}							
					}
				}	
				var rrw = function() {
					return rewardsList[rng(0,rewardsList['length']-1)];
				}
				if (screen.width < 575) {
					seih = 130;
				} else {
					seih = 200;
				}
				var ezslot1 = new EZSlots(
					"ezslots1",
					{
						"reelCount":3,
						"winningSet": [2,2,2],
						"symbols": images,
						"height":seih,
						"width":100,
						"callback": cbF
					}
				);
			});
		});
	}
	function gsfi() {
		gS( "cwpf-s6", function(src) {			
			const element = document.querySelector('.cwpf-m-i-5');
			element.classList.add('animate__animated', 'animate__bounceOut');
			element.addEventListener('animationend', () => {
				$( '#cwpf-m' ).html(src).hide().fadeIn();
				$( '.proc-rew-item-duration' ).html('<span class="yhwn-rt-s animation-delay-600"><span class="yhwnrvv">' + reward_won + '</span> ' + r_name + '</span>');	
				$( '.proc-rew-item-name' ).html(r_type);	
				function progressBarConsole(percent, $element, duration) {
					var progressBarConsoleWidth = percent * $element.width() / 100;
					$element.find('div').animate({ width: progressBarConsoleWidth }, duration).html(percent + "%&nbsp;");
				}
				progressBarConsole(0, $('#progressBarConsole'), 1);
				progressBarConsole(100, $('#progressBarConsole'), 22000);
				sT(0, $cm_1, 0, 0);
				sT(1500, $cm_2, 1, 0);
				sT(8000, $cm_3, 1, 0);
				sT(15000, $cm_4, 0, 0);
				sT(22000, '', 0, 1);
			});
		});
	}
	function sT(tD, cms, gn, cl) {
		setTimeout(function() {	
			$($c_s_m).html(cms);
			aO( $($c_s_m), 'animate__bounceIn' );
			if (cl === 1) {
				gS( "cwpf-s7", function(src) {	
					const element = document.querySelector('.cwpf-m-i-6');
					element.classList.add('animate__animated', 'animate__bounceOut');
					element.addEventListener('animationend', () => {
						$( '#cwpf-m' ).html(src).hide().fadeIn();
						$( '#amdv' ).html(reward_won);
						$( '.proc-rew-item-duration' ).html('<span class="yhwn-rt-s animation-delay-600"><span class="yhwnrvv">' + reward_won + '</span> ' + r_name + '</span>');	
						$( '.proc-rew-item-name' ).html(r_type);	
						
					});
				});
            }
		}, tD );
	}
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animate__animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animate__animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'assets/cwpf/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
		console.clear();
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }
});
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};