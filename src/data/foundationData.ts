import { getAssetUrl } from '../utils/assetHelper';

export interface FoundationInfo {
  name: string;
  hindiName: string;
  tagline: string;
  subTagline: string;
  quote: string;
  president: {
    name: string;
    hindiName: string;
    title: string;
    hindiTitle: string;
    image: string;
    bio: string;
    message: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    ambulanceHelpline: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    address: string;
    locality: string;
    tehsil: string;
    district: string;
    state: string;
    country: string;
    officeHours: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export const foundationData: FoundationInfo = {
  name: "Lucky Atulya Foundation",
  hindiName: "लक्की अतुल्य फाउंडेशन",
  tagline: "सेवा ही संकल्प है, कर्म ही पूजा है।",
  subTagline: "हमारी संस्था आपके सहयोग के लिए कटिबद्ध है",
  quote: "अपने लिए तो सब जीते हैं, किसी और के लिए जी कर तो देखो, यकीन मानो जीने का अंदाज ही बदल जाएगा.....",
  president: {
    name: "Lodhi Devendra Singh",
    hindiName: "लोधी देवेंद्र सिंह",
    title: "President, Lucky Atulya Foundation",
    hindiTitle: "अध्यक्ष, लक्की अतुल्य फाउंडेशन",
    image: getAssetUrl("/images/foundation/02-president-portrait.webp"),
    bio: "समाज के वंचित, निर्धन और जरूरतमंद बंधुओं की निःस्वार्थ सेवा के लिए समर्पित। जसराना एवं फिरोजाबाद क्षेत्र में मानव कल्याण, स्वास्थ्य सहायता, गौ सेवा एवं सामाजिक उत्थान के लिए निरंतर प्रयासरत।",
    message: "हमारा एकमात्र ध्येय यह सुनिश्चित करना है कि हमारे समाज में कोई भी वृद्ध अकेला न महसूस करे, किसी भी बहन-बेटी के विवाह में लाचारी आड़े न आए, गंभीर संकट के समय समय पर एम्बुलेंस सहायता पहुंचे और गौ माता की सेवा निष्ठा से हो सके। सेवा कोई उपकार नहीं, मानव जीवन का पवित्र कर्तव्य है।"
  },
  contact: {
    phone: "7505082602",
    phoneFormatted: "+91 75050 82602",
    ambulanceHelpline: "9784833600",
    whatsapp: "917505082602",
    whatsappFormatted: "+91 75050 82602",
    email: "contact@luckyaturvafoundation.org",
    address: "परानपुर मोड़, जसराना, फिरोजाबाद, उत्तर प्रदेश, भारत",
    locality: "परानपुर मोड़ (Paranpur Mod)",
    tehsil: "जसराना (Jasrana)",
    district: "फिरोजाबाद (Firozabad)",
    state: "उत्तर प्रदेश (Uttar Pradesh)",
    country: "भारत (India)",
    officeHours: "प्रातः 09:00 बजे से सायं 07:00 बजे तक (आपातकालीन एम्बुलेंस हेतु संपर्क जारी)"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/p/Lodhi-Devendra-Singh-61560215950908/",
    instagram: "https://www.instagram.com/lodhidevendra3600/",
    youtube: "https://www.youtube.com/@luckytrustaturrajasrana"
  }
};

