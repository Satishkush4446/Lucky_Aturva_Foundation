import { getAssetUrl } from '../utils/assetHelper';

export interface ActivityCategory {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  items: {
    title: string;
    hindiTitle: string;
    description: string;
    image: string;
    tag: string;
    notice: string;
  }[];
}

export const activitiesData: ActivityCategory[] = [
  {
    id: "community-service",
    name: "Community Service",
    hindiName: "सामुदायिक सेवा",
    description: "समाज के कमजोर वर्गों की सहायता, राहत सामग्री वितरण एवं सार्वजनिक कल्याण के सामूहिक प्रयास।",
    items: [
      {
        title: "Relief Material & Ration Distribution Drive",
        hindiTitle: "जरूरतमंद परिवारों को सहायता सामग्री एवं पोषण वितरण",
        description: "अध्यक्ष श्री लोधी देवेंद्र सिंह जी की उपस्थिति में असहाय वृद्ध माताओं व निर्धन परिवारों को राशन किट व आवश्यक सामग्री का वितरण।",
        image: getAssetUrl("/images/foundation/president-samagri-vitran.webp"),
        tag: "राहत सामग्री",
        notice: "लक्की अतुल्य फाउंडेशन राहत सामग्री वितरण अभियान (जसराना, फिरोजाबाद)"
      },
      {
        title: "Cleanliness & Environment Drives",
        hindiTitle: "स्वच्छता एवं पर्यावरण संरक्षण अभियान",
        description: "गाँवों एवं कस्बों में सार्वजनिक स्थलों की स्वच्छता, प्लास्टिक मुक्त समाज का संदेश एवं पौधारोपण पहल।",
        image: getAssetUrl("/images/foundation/11-why-choose-us.webp"),
        tag: "पर्यावरण",
        notice: "सामुदायिक पौधरोपण एवं ग्राम विकास पहल"
      }
    ]
  },
  {
    id: "health-initiatives",
    name: "Health Initiatives",
    hindiName: "स्वास्थ्य एवं चिकित्सा सहायता",
    description: "आपातकालीन एम्बुलेंस समन्वय, प्राथमिक स्वास्थ्य परामर्श एवं गंभीर मरीजों के लिए उपचार सहयोग।",
    items: [
      {
        title: "Emergency Ambulance Coordination",
        hindiTitle: "आपातकालीन एम्बुलेंस सहायता एवं समन्वय",
        description: "दुर्घटना एवं गंभीर बीमारी के समय जसराना व आसपास के क्षेत्रों से मरीजों को समय पर जिला अस्पताल व मेडिकल कॉलेज पहुंचाने का निरंतर प्रयास।",
        image: getAssetUrl("/images/foundation/04-free-ambulance.webp"),
        tag: "चिकित्सा सेवा",
        notice: "फाउंडेशन के पास अधिकृत एम्बुलेंस वाहन उपलब्ध है (मो. 9784833600 / 7505082602)।"
      },
      {
        title: "Guidance for Government Health Schemes",
        hindiTitle: "सरकारी स्वास्थ्य योजनाओं का मार्गदर्शन",
        description: "आयुष्मान भारत कार्ड एवं मुख्यमंत्री राहत कोष से उपचार सहायता प्राप्त करने हेतु कागजी प्रक्रिया में निःशुल्क सहयोग।",
        image: getAssetUrl("/images/foundation/07-medical-assistance.webp"),
        tag: "स्वास्थ्य मार्गदर्शन",
        notice: "अस्पताल एवं चिकित्सीय परामर्श समन्वय"
      }
    ]
  },
  {
    id: "social-welfare",
    name: "Social Welfare",
    hindiName: "सामाजिक कल्याण कार्य",
    description: "वृद्धा/विधवा पेंशन के लिए आवेदन में मदद एवं निर्धन कन्याओं के विवाह में उपहार व सामाजिक संबल।",
    items: [
      {
        title: "Assistance in Application & Form Filling",
        hindiTitle: "सहायता आवेदन एवं निःशुल्क परामर्श शिविर",
        description: "अध्यक्ष लोधी देवेंद्र सिंह जी द्वारा ग्रामीण बुजुर्गों और जरूरतमंदों के सहायता आवेदन सीधे फॉर्म भरकर ऑनलाइन प्रक्रिया से जोड़े जाने का कार्य।",
        image: getAssetUrl("/images/foundation/president-sahayata-aavedan.webp"),
        tag: "आवेदन शिविर",
        notice: "परानपुर मोड़ केंद्र पर सहायता आवेदन प्रक्रिया"
      },
      {
        title: "Daughter's Wedding Support Initiative",
        hindiTitle: "कन्या विवाह आवश्यक सामग्री सहयोग",
        description: "आर्थिक रूप से लाचार परिवारों की बेटियों के विवाह में घरेलू आवश्यक सामग्री व वस्त्र उपहार स्वरूप भेंट कर सहयोग।",
        image: getAssetUrl("/images/foundation/05-marriage-assistance.webp"),
        tag: "कन्या विवाह",
        notice: "कन्या विवाह सहयोग उपहार वितरण"
      }
    ]
  },
  {
    id: "cow-welfare",
    name: "Cow Welfare",
    hindiName: "गौ सेवा एवं संरक्षण",
    description: "बेसहारा व चोटिल गौवंश की देखभाल, हरा चारा-भूसा व्यवस्था एवं चिकित्सा सहयोग।",
    items: [
      {
        title: "Gau Seva & Fodder Distribution",
        hindiTitle: "गौ सेवा: गौवंश को हरा चारा एवं संरक्षण",
        description: "अध्यक्ष श्री लोधी देवेंद्र सिंह जी द्वारा स्वयं गौशाला पहुंचकर देशी गौवंश को ताजा हरा चारा, गुड़ व पोषण उपलब्ध कराने का निरंतर संकल्प।",
        image: getAssetUrl("/images/foundation/president-gau-seva.webp"),
        tag: "गौ सेवा",
        notice: "गौ सेवा: सेवा • संवेदना • संस्कार (जसराना गौशाला)"
      },
      {
        title: "Rescue & First-aid for Injured Cattle",
        hindiTitle: "घायल गौवंश का प्राथमिक उपचार व पुनर्वास",
        description: "सड़क दुर्घटना में घायल गायों की सूचना मिलते ही स्थानीय पशु चिकित्सकों की मदद से घावों पर मरहम-पट्टी व दवाएं उपलब्ध कराना।",
        image: getAssetUrl("/images/foundation/14-process-support.webp"),
        tag: "प्राथमिक उपचार",
        notice: "मानवीय सेवा एवं पुनर्वास"
      }
    ]
  },
  {
    id: "religious-cultural",
    name: "Religious & Cultural Participation",
    hindiName: "धार्मिक एवं सामाजिक सहभागिता",
    description: "धार्मिक उत्सवों, कांवड़ सेवा शिविरों एवं सांस्कृतिक कार्यक्रमों में सेवा प्रबंधन व जल वितरण।",
    items: [
      {
        title: "Temple Bhandara & Prasad Distribution",
        hindiTitle: "धार्मिक भंडारा एवं महाप्रसाद सेवा",
        description: "धार्मिक आयोजनों व मंदिर उत्सवों में अध्यक्ष लोधी देवेंद्र सिंह जी एवं स्वयंसेवकों द्वारा श्रद्धालुओं व आमजन को भोजन प्रसादी वितरण।",
        image: getAssetUrl("/images/foundation/president-bhandara-seva.webp"),
        tag: "भंडारा सेवा",
        notice: "धार्मिक उत्सव एवं महाप्रसाद वितरण शिविर"
      },
      {
        title: "Kanwar Yatra Service Camp Coordination",
        hindiTitle: "कांवड़ यात्रा सेवा शिविर व्यवस्था",
        description: "श्रावण मास में शिवभक्त कांवड़ियों के लिए प्राथमिक चिकित्सा, विश्राम, शीतल जल एवं फलाहार की निःस्वार्थ सेवा।",
        image: getAssetUrl("/images/foundation/08-religious-participation.webp"),
        tag: "कांवड़ सेवा",
        notice: "कांवड़ सेवा शिविर एवं जल सेवा"
      }
    ]
  }
];

