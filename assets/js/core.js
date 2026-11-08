/**
 * DATTADAS — Core Application Engine
 * Data store, auth, cart, state management
 */
'use strict';

// ═══════════════════════════════════════════════
// PRODUCT DATABASE (Authentic Marathi Literature)
// ═══════════════════════════════════════════════
const DATTADAS_PRODUCTS = [
  {
    id: 'P001',
    slug: 'shri-datta-mahatmya',
    titleMarathi: 'श्री दत्त महात्म्य',
    titleEnglish: 'Shri Datta Mahatmya',
    shortDesc: 'भगवान दत्तात्रेयांच्या महिमेचे, अवतारांचे आणि २४ गुरूंच्या बोधाचे संपूर्ण प्रासादिक कथा वर्णन.',
    fullDesc: `
      <h3>🌸 श्री दत्त महात्म्य — प्रासादिक कथा स्वरूप</h3>
      <p>भगवान दत्तात्रेय हे ब्रह्मा, विष्णू आणि महेश या त्रिगुणात्मक शक्तींचे साक्षात एकसंध रूप आहेत. महर्षी अत्रि आणि सती अनसूया यांच्या अढळ तपश्चर्येने संतुष्ट होऊन साक्षात त्रिदेव अनसूयेच्या पोटी पुत्ररूपाने अवतरले, ही या ग्रंथाची मूळ कथा आहे.</p>
      
      <h4>📖 ग्रंथातील प्रमुख प्रासादिक कथा व प्रसंग:</h4>
      <ul>
        <li><strong>अत्रि-अनसूया तपश्चर्या व त्रिदेवांचे आगमन:</strong> सती अनसूयेचे पातिव्रत्य तपासण्यासाठी आलेले ब्रह्मा, विष्णू आणि महेश बालरूप घेऊन अनसूयेचे पुत्र कसे झाले, याचे हृदयस्पर्शी कथावर्णन.</li>
        <li><strong>चोवीस गुरूंची दिव्य कथा:</strong> अवधूत दत्तात्रेयांनी पृथ्वी, जल, अग्नी, वायू, आकाश, चंद्र, सूर्य, कपोत पक्षी, अजगर, समुद्र, पतंग, मधमाशी, हत्ती, हरीण, मासा, पिंगला वेश्या, बाळ, कन्या, बाण तयार करणारा लोहार, सर्प, कोळी आणि कीटक या २४ घटकांकडून घेतलेला आत्मज्ञानाचा अमर बोध.</li>
        <li><strong>कार्तवीर्यार्जुन व परशुराम आख्यान:</strong> सहस्त्रार्जुन कार्तवीर्यार्जुनाला दत्तगुरूंच्या उपासनेने प्राप्त झालेली सिद्धी व त्यांचे अध्यात्मिक मार्गदर्शन.</li>
        <li><strong>दत्त पादुका व क्षेत्र महिमा:</strong> माहूर (माता रेणुका स्थान), गिरनार, औदुंबर, नरसोबाची वाडी आणि गाणगापूर येथील दत्त पादुकांची प्रासादिक महती.</li>
      </ul>
      
      <p>हा ग्रंथ केवळ माहिती देत नाही, तर वाचकाच्या अंतःकरणात भक्ती, विवेक आणि वैराग्याची ज्योत प्रज्वलित करतो. प्रत्येक घरामध्ये नित्य पठण करण्यासाठी हा ग्रंथ अत्यंत मंगलमय मानला जातो.</p>
    `,
    author: 'पं. विश्वनाथ शास्त्री',
    category: 'दत्त संप्रदाय',
    categorySlug: 'datta-sampraday',
    language: 'मराठी',
    pages: 240,
    format: 'PDF + ePub',
    coverColor: '#651F2B',
    coverEmoji: '🙏',
    coverImage: 'assets/images/books/shri-datta-mahatmya.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: true,
    isNew: false,
    rating: 4.9,
    ratingCount: 325,
    tags: ['दत्त', 'महात्म्य', 'अध्यात्म', 'भक्ती'],
    tableOfContents: [
      'अध्याय १: मंगलाचरण व अत्रि-अनसूया दिव्य तपश्चर्या',
      'अध्याय २: त्रिदेवांची परीक्षा व बाळ दत्तात्रेय जन्मकथा',
      'अध्याय ३: भगवान दत्तात्रेयांचे त्रिगुणात्मक स्वरूप व चार श्वान-कामधेनु रहस्य',
      'अध्याय ४: २४ गुरूंची अमर कथा (भाग १ - पृथ्वी, जल, अग्नी, वायू, आकाश)',
      'अध्याय ५: २४ गुरूंची अमर कथा (भाग २ - समुद्र, पतंग, पिंगला वेश्या, बाणकार)',
      'अध्याय ६: सहस्त्रार्जुन कार्तवीर्यार्जुनाला दत्तकृपा व वरदान',
      'अध्याय ७: भगवान परशुराम व दत्तात्रेय संवाद (आत्मज्ञान बोध)',
      'अध्याय ८: माहूरगड, गिरनार व औदुंबर क्षेत्र महात्म्य',
      'अध्याय ९: दत्त नामस्मरण विधी व एकाक्षरी-द्वादशाक्षरी मंत्र',
      'अध्याय १०: दत्त भक्तीचे नऊ प्रकार (नवविधा भक्ती)',
      'अध्याय ११: कलियुगातील भाविकांचे प्रासादिक अनुभव व संकटनिवारण',
      'अध्याय १२: श्री दत्त महात्म्य संपूर्ण फलश्रुती व आरती संग्रह'
    ],
    seoTitle: 'श्री दत्त महात्म्य मराठी ई-बुक | DattaDas.in',
    seoDesc: 'भगवान दत्तात्रेयांच्या महिमेचे संपूर्ण कथा वर्णन. मराठी ई-बुक खरेदी करा फक्त ₹६९९ मध्ये.',
    createdAt: '2024-01-15',
  },
  {
    id: 'P002',
    slug: 'shri-gurucharitra',
    titleMarathi: 'श्री गुरुचरित्र — संपूर्ण प्रासादिक कथा व सोपे भाषांतर',
    titleEnglish: 'Shri Gurucharitra - Complete Marathi Stories & Translation',
    shortDesc: 'दत्त संप्रदायाचा परमपवित्र ग्रंथ — श्रीपाद श्रीवल्लभ व श्री नृसिंह सरस्वती महाराजांचे ५२ अध्यायांचे संपूर्ण प्रासादिक कथासार.',
    fullDesc: `
      <h3>📿 श्री गुरुचरित्र — दत्त संप्रदायाचा अमृतमय महाग्रंथ</h3>
      <p><strong>श्री गुरुचरित्र</strong> हा दत्त संप्रदायाचा वेदतुल्य, अत्यंत प्रासादिक आणि जागृत ग्रंथ आहे. १५व्या शतकात कवी सरस्वती गंगाधर यांनी आपल्या गुरुपरंपरेच्या आज्ञेने हा ग्रंथ प्राकृत ओवीबद्ध भाषेत रचला. सिद्ध मुनी आणि त्यांचे शिष्य नामधारक यांच्यातील प्रश्नोत्तरांच्या संवादातून संपूर्ण ५२ अध्यायांची ही दिव्य कथा उलगडते.</p>

      <h4>📖 श्री गुरुचरित्रातील प्रमुख अवतार व कथा स्वरूप:</h4>
      <ul>
        <li><strong>प्रथम अवतार — श्रीपाद श्रीवल्लभ महाराज (पिठापूर व कुरवपूर):</strong>
          आंध्र प्रदेशातील पिठापूर येथे आपळराजा व सुमती यांच्या घरी दत्तात्रेयांचा पहिला कलियुगी अवतार झाला. कुरवपूर येथे कृष्णा नदीच्या तीरावर त्यांनी केलेल्या अनेक अलौकिक लीला, रजकाला पुढील जन्मात बादशहा होण्याचा दिलेला वर आणि भक्तांच्या संकटांचे निवारण याचे भावपूर्ण कथा निरूपण.
        </li>
        <li><strong>द्वितीय अवतार — श्री नृसिंह सरस्वती महाराज (कारंजा, औदुंबर, नरसोबा वाडी व गाणगापूर):</strong>
          महाराष्ट्रातील वाशीम जवळील कारंजा (लाड) येथे अंबाभवानी व माधव यांच्या पोटी अवतरलेले नृसिंह सरस्वती. जन्मतः केवळ 'ॐ' उच्चारणे, वयाच्या ७व्या वर्षी मौंजीबंधनात थेट वेदांचे निरूपण करणे, आईवडिलांना ज्ञान देऊन संन्यास घेणे आणि संकटात सापडलेल्या जीवांना अभय देणे.
        </li>
        <li><strong>गाणगापूर क्षेत्रातील अमर प्रासादिक चमत्कार:</strong>
          <ul>
            <li>वाळलेल्या औदुंबर काठीला पाणी घालून तिला पालवी फुटणे आणि दोन गर्विष्ठ ब्राह्मणांच्या गर्वाचे हरण करणे (अध्याय २८).</li>
            <li>अठरा वर्षे वांझ असलेल्या म्हशीचे दुग्ध दोहन करून दरिद्री ब्राह्मणाला धन्य करणे (अध्याय २२).</li>
            <li>कुष्ठरोगी ब्राह्मणाला भीमा-अमरजा संगमावर स्नान घालून क्षणात निरोगी व सुवर्णकांती बनवणे (अध्याय ४०).</li>
            <li>ब्राह्मणीच्या मृत पुत्राला पुन्हा सजीव करून तिच्या मांडीवर खेळवणे (अध्याय ३०-३२).</li>
            <li>अल्प अन्नामध्ये गाणगापुरातील हजारो ब्राह्मणांना पंचपक्वान्नांचे तृप्त भोजन घालणे — अन्नपूर्णा सिद्धी (अध्याय ४२).</li>
            <li>एकाच वेळी आठ रूपांनी वेगवेगळ्या भक्तांच्या घरी दीपावली उत्सवात हजर राहणे (अध्याय ४४).</li>
          </ul>
        </li>
        <li><strong>कर्दळीवनात गुप्त होणे व नित्य पादुका वास:</strong>
          आपले अवतार कार्य पूर्ण झाल्यावर महाराज गाणगापूर सोडताना भाविकांच्या कल्याणासाठी आपल्या 'निर्गुण पादुका' स्थापन करून कर्दळीवनात गुप्त झाले. "मी गाणगापुरात सदैव सूक्ष्म रूपाने वास करत असून नित्य दुपारी भिक्षा मागायला येतो," हे त्यांचे अमर वचन आहे.
        </li>
      </ul>

      <h4>✨ सप्ताह पारायण विधी व नियम:</h4>
      <p>श्री गुरुचरित्राचे सात दिवसांत ५२ अध्यायांचे पारायण केले जाते (१ ते ९, १० ते २१, २२ ते २९, ३० ते ३५, ३६ ते ३८, ३९ ते ४३, आणि ४४ ते ५२). या ई-पुस्तकात प्रत्येक अध्यायाची मूळ कथा, सुलभ मराठी भावार्थ आणि पारायणाचे अचूक शास्त्रोक्त नियम दिले आहेत.</p>
    `,
    author: 'सरस्वती गंगाधर (सुलभ कथा निरूपण: डॉ. श्रीकांत जोशी)',
    category: 'श्री गुरुचरित्र',
    categorySlug: 'gurucharitra',
    language: 'मराठी',
    pages: 480,
    format: 'PDF + ePub',
    coverColor: '#1a3a6e',
    coverEmoji: '📿',
    coverImage: 'assets/images/books/shri-gurucharitra.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: true,
    isNew: false,
    rating: 4.9,
    ratingCount: 512,
    tags: ['गुरुचरित्र', 'नरसिंह सरस्वती', 'श्रीपाद वल्लभ', 'दत्त', 'पारायण', 'गाणगापूर'],
    tableOfContents: [
      'अध्याय १: मंगलाचरण, सिद्ध-नामधारक संवाद व दत्तात्रेय अवतार कथा',
      'अध्याय २: श्रीपाद श्रीवल्लभ जन्मकथा व बाललीला निरूपण',
      'अध्याय ३: अंबिका व्रत, श्रीपाद दर्शन व शनीप्रदोष महिमा',
      'अध्याय ४: कुक्कूटेश्वर दर्शन, रजकास राज्यप्राप्ती वरदान',
      'अध्याय ५: श्रीपाद श्रीवल्लभ गुप्त होणे व कुरवपूर महात्म्य',
      'अध्याय ६: गोकर्ण क्षेत्र महात्म्य व रावण-गणपती कथा',
      'अध्याय ७: गोकर्ण क्षेत्रातील महाबळेश्वर शिवपिंडी स्थापना',
      'अध्याय ८: शनीप्रदोष व्रत कथा व यमपाशातून मुक्ती',
      'अध्याय ९: नृसिंह सरस्वतींचा कारंजा येथे जन्म व मौंजीबंधन',
      'अध्याय १०: काशी क्षेत्र यात्रा व संन्यास दीक्षा ग्रहण',
      'अध्याय ११: कारंजा येथे माता-पित्यांची भेट व उपदेश',
      'अध्याय १२: तीर्थाटन, औदुंबर क्षेत्री चातुर्मास अनुष्ठान',
      'अध्याय १३: मूक ब्राह्मणास विद्यादान व त्वरित वेदज्ञान प्राप्ती',
      'अध्याय १४: सायंदेव भक्ताला दर्शन व क्रूर यवनापासून रक्षण',
      'अध्याय १५: गाणगापूर क्षेत्री आगमन, भीमा-अमरजा संगम महिमा',
      'अध्याय १६: गुरुमहिमा व एकनिष्ठ शिष्य कथा निरूपण',
      'अध्याय १७: अज्ञानी ब्राह्मणास ज्ञानदान व अहंकार मुक्ती',
      'अध्याय १८: दरिद्री ब्राह्मणाच्या शेतातील घेवड्याची वेल उपटून सुवर्णप्राप्ती',
      'अध्याय १९: गाणगापूर महात्म्य व संतांचे आगमन',
      'अध्याय २०: स्त्रीधर्म, पातिव्रत्य व कुलधर्म निरूपण',
      'अध्याय २१: मृत पुत्रास जीवनदान व ब्राह्मणीचा विलाप शमन',
      'अध्याय २२: वांझ म्हशीचे दुग्ध दोहन व दरिद्र्य निवारण',
      'अध्याय २३: ब्रह्मराक्षसाचा उद्धार व मुक्ती कथा',
      'अध्याय २४: त्रिविक्रम भारतींच्या गर्वाचे हरण व विश्वरूप दर्शन',
      'अध्याय २५: दोन गर्विष्ठ पंडितांचे आव्हान व शास्त्रार्थ',
      'अध्याय २६: चार वेदांचे स्वरूप व वेदमंत्र निरूपण',
      'अध्याय २७: पतित शूद्र ब्राह्मणाच्या तोंडून चार वेद वदवणे',
      'अध्याय २८: शुष्क औदुंबर काठीला पालवी फुटणे — महाचमत्कार',
      'अध्याय २९: भिल्ल राजाची भक्ती व कर्मविपाक कथा',
      'अध्याय ३०: पतिव्रता स्त्रीच्या मृत पतीस जीवनदान आख्यान',
      'अध्याय ३१: सती जाणाऱ्या पतिव्रतेचे सांत्वन व आशीर्वाद',
      'अध्याय ३२: पतिव्रतेच्या पुण्याने पतीचे पुनरुज्जीवन व आयुर्मर्यादा',
      'अध्याय ३३: कर्ममार्ग, नित्य संध्योपासना व पूजेचे महत्त्व',
      'अध्याय ३४: रुद्राक्ष महिमा, भस्म व त्रिपुंड्र धारण विधी',
      'अध्याय ३५: काचमण्यांची रुद्राक्षे बनवणे व व्याध मुक्ती कथा',
      'अध्याय ३६: शिवकवच स्तोत्र व प्रदोष व्रताची अलौकिक महती',
      'अध्याय ३७: श्राद्धविधी, पितृऋण व पूर्वजांचे उद्धरण',
      'अध्याय ३८: ब्राह्मणाच्या घरी श्राद्धदिनी पूर्वजांचे प्रत्यक्ष दर्शन',
      'अध्याय ३९: साठ वर्षांच्या वांझ स्त्रीला तेजस्वी पुत्रप्राप्ती वर',
      'अध्याय ४०: ब्राह्मणाचा महारोग (कुष्ठरोग) समूळ निवारण',
      'अध्याय ४१: सायंदेवाचे पुत्र कल्याण व वंशवृद्धी आशीर्वाद',
      'अध्याय ४२: साठ धान्यांची रास व अल्प अन्नात हजारो लोकांची तृप्ती (अन्नपूर्णा)',
      'अध्याय ४३: सोमनाथ व मल्लिकार्जुन ज्योतिर्लिंग दर्शन',
      'अध्याय ४४: एकाच वेळी आठ रूपांनी भक्तांच्या घरी दीपावली सण',
      'अध्याय ४५: तंतुका भक्ताला क्षणार्धात श्रीशैल्य पर्वत दर्शन व परत आणणे',
      'अध्याय ४६: कल्लोळेश्वर भक्ताला काशिदर्शन चमत्कार',
      'अध्याय ४७: यवन पातशाहच्या गंडमाळा व्याधीचे निवारण व भक्ती',
      'अध्याय ४८: अमरापूर क्षेत्री अमरेश्वर महात्म्य व संगम स्नान',
      'अध्याय ४९: गाणगापूरचे अष्टतीर्थ महात्म्य व स्नान विधी',
      'अध्याय ५०: शुष्क शेतात अभूतपूर्व धान्याची सुगी व कृपा',
      'अध्याय ५१: नृसिंह सरस्वती महाराजांचे कर्दळीवनात गुप्त होणे व निर्गुण पादुका स्थापना',
      'अध्याय ५२: श्री गुरुचरित्र पारायण फलश्रुती व सिद्ध-नामधारक संवाद समाप्ती'
    ],
    seoTitle: 'श्री गुरुचरित्र संपूर्ण कथा व सुलभ मराठी भाषांतर ई-बुक | DattaDas.in',
    seoDesc: 'दत्त संप्रदायाचा परमपवित्र ग्रंथ श्री गुरुचरित्र ५२ अध्यायांच्या संपूर्ण मराठी कथेत. ₹६९९ मध्ये खरेदी करा.',
    createdAt: '2024-02-01',
  },
  {
    id: 'P003',
    slug: 'datta-dhyan-sadhana',
    titleMarathi: 'दत्त ध्यान साधना',
    titleEnglish: 'Datta Dhyan Sadhana',
    shortDesc: 'भगवान दत्तात्रेयांच्या ध्यान पद्धती, कुंडलिनी जागरण आणि साधनेचे व्यावहारिक मार्गदर्शन.',
    fullDesc: `
      <h3>🧘 दत्त ध्यान साधना — अंतर्मनाची दिव्य यात्रा</h3>
      <p>आधुनिक युगात दैनंदिन तणाव, चिंता आणि अशांततेवर मात करण्यासाठी भगवान दत्तात्रेयांनी सांगितलेली ध्यानपद्धती अत्यंत प्रभावी सिद्ध होते. या ग्रंथात दत्तात्रेयांचे अवधूत ध्यान, षट्चक्र भेदन आणि आत्मशांतीचे रहस्य सुलभ भाषेत उलगडले आहे.</p>
      <h4>📖 ग्रंथातील मुख्य साधना व विषय:</h4>
      <ul>
        <li>प्राणायाम आणि नाडीशुद्धी विधी</li>
        <li>दत्तात्रेयांच्या त्रिगुणात्मक रूपाचे मानसपूजा ध्यान</li>
        <li>'ॐ द्रां दत्तात्रेयाय नमः' या सिद्ध मंत्राचा जप विधी</li>
        <li>मनातील नकारात्मक विचारांचे उच्चाटन व चित्तशुद्धी</li>
      </ul>
    `,
    author: 'स्वामी दत्तानंद महाराज',
    category: 'ध्यान आणि साधना',
    categorySlug: 'dhyan-sadhana',
    language: 'मराठी',
    pages: 156,
    format: 'PDF + ePub',
    coverColor: '#1b5e20',
    coverEmoji: '🧘',
    coverImage: 'assets/images/books/dhyan-sadhana.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: true,
    rating: 4.8,
    ratingCount: 192,
    tags: ['ध्यान', 'साधना', 'मंत्र', 'आत्मशांती'],
    tableOfContents: [
      'अध्याय १: ध्यानाची पूर्वतयारी, आसन व प्राणायम विधी',
      'अध्याय २: भगवान दत्तात्रेयांचे सगुण मानसपूजा ध्यान',
      'अध्याय ३: बीजमंत्र साधना व जप रहस्य (ॐ द्रां दत्तात्रेयाय नमः)',
      'अध्याय ४: षट्चक्र भेदन व कुंडलिनी जागरण मार्गदर्शन',
      'अध्याय ५: अवधूत स्थिती व चित्तवृत्ती निरोध',
      'अध्याय ६: दैनंदिन जीवनात तणावमुक्तीसाठी सुलभ ध्यान',
      'अध्याय ७: दत्त पादुका ध्यान व गुरुतत्व साक्षात्कार',
      'अध्याय ८: साधना फलश्रुती व साधकांचे अनुभव'
    ],
    seoTitle: 'दत्त ध्यान साधना मराठी ई-बुक | DattaDas.in',
    seoDesc: 'दत्त ध्यान पद्धती आणि साधनेचे सविस्तर मराठी मार्गदर्शन ई-बुक.',
    createdAt: '2024-03-10',
  },
  {
    id: 'P004',
    slug: 'avadhuta-gita-artha',
    titleMarathi: 'अवधूत गीता — मराठी अर्थ व निरूपण',
    titleEnglish: 'Avadhuta Gita - Marathi Meaning',
    shortDesc: 'दत्तात्रेयांनी रचलेल्या अवधूत गीतेचा मूळ संस्कृत श्लोकांसह सुलभ मराठी अर्थ आणि तत्त्वज्ञान.',
    fullDesc: `
      <h3>📜 अवधूत गीता — अद्वैत वेदांताचा परमोच्च ग्रंथ</h3>
      <p>भगवान दत्तात्रेयांनी रचलेली <strong>अवधूत गीता</strong> ही भारतीय अध्यात्म विश्वातील अत्यंत श्रेष्ठ आणि गहन कलाकृती मानली जाते. "सर्वव्यापी, एकमेवाद्वितीय, निर्विकार आत्मा हाच मी आहे" या अद्वैत सत्याची अनुभूती या ग्रंथात दिली आहे.</p>
      <h4>📖 ग्रंथाचे वैशिष्ट्य:</h4>
      <ul>
        <li>मूळ संस्कृत श्लोक आणि त्याचा सोपा प्रासादिक मराठी अनुवाद</li>
        <li>जन्म, मृत्यू, बंध आणि मोक्ष यावरील तात्त्विक विवरण</li>
        <li>अहंकाराचे विसर्जन आणि परब्रह्म स्वरूपाशी तादात्म्य</li>
      </ul>
    `,
    author: 'भगवान दत्तात्रेय (अनुवाद: श्री. माधव कुलकर्णी)',
    category: 'तत्त्वज्ञान',
    categorySlug: 'tattvagyan',
    language: 'मराठी',
    pages: 208,
    format: 'PDF + ePub',
    coverColor: '#4a1a6e',
    coverEmoji: '📜',
    coverImage: 'assets/images/books/avadhuta-gita.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: false,
    rating: 4.7,
    ratingCount: 145,
    tags: ['अवधूत', 'गीता', 'अद्वैत', 'वेदांत'],
    tableOfContents: [
      'अध्याय १: आत्मसाक्षात्कार व अद्वैत निष्ठा निरूपण',
      'अध्याय २: देहातीत अवस्था व आत्मतत्व लक्षणे',
      'अध्याय ३: सर्वव्यापी ब्रह्म व माया निराकरण',
      'अध्याय ४: ध्यान, धारणा आणि उपाधि मुक्ती',
      'अध्याय ५: समरसता भाव व द्वैत भ्रम विसर्जन',
      'अध्याय ६: अवधूत आचार, सहज स्थिती व मुक्त लक्षण',
      'अध्याय ७: गुरुशिष्य अद्वैत संवाद व ज्ञानदीक्षा',
      'अध्याय ८: अवधूत गीता सार व मोक्ष फलश्रुती'
    ],
    seoTitle: 'अवधूत गीता मराठी अर्थ ई-बुक | DattaDas.in',
    seoDesc: 'अवधूत गीता मराठी श्लोकार्थ व निरूपण ई-बुक ₹६९९ मध्ये.',
    createdAt: '2024-02-20',
  },
  {
    id: 'P005',
    slug: 'navanath-bhaktisar',
    titleMarathi: 'नवनाथ भक्तिसार — संपूर्ण कथासार',
    titleEnglish: 'Navanath Bhaktisar - Complete Stories',
    shortDesc: 'मच्छिंद्रनाथ, गोरखनाथ आदी नवनाथांच्या अद्भूत, प्रासादिक लीलांचे आणि शिकवणींचे मराठी कथा वर्णन.',
    fullDesc: `
      <h3>🕉️ नवनाथ भक्तिसार — नाथांच्या दिव्य शक्तींचा खजिना</h3>
      <p>महाराष्ट्राच्या भक्ती परंपरेत नवनाथ संप्रदायाला अत्यंत पूज्य स्थान आहे. भगवान विष्णूंचे नव नारायण कलियुगात नवनाथ रूपाने अवतरले. मच्छिंद्रनाथ, गोरखनाथ, जालंदरनाथ, कानिफनाथ, गहिनीनाथ, भर्तरीनाथ, रेवणनाथ, नागनाथ आणि चरपटीनाथ या नाथांनी भक्तीचा प्रसार करून सामान्यांचे रक्षण केले.</p>
      <h4>📖 ग्रंथातील प्रमुख कथा:</h4>
      <ul>
        <li>मत्स्याच्या उदरातून मच्छिंद्रनाथांचा जन्म आणि शंकरांकडून मिळालेले ज्ञान</li>
        <li>गोवऱ्यांच्या ढिगाऱ्यातून गोरखनाथांचा जन्म आणि कठोर तपश्चर्या</li>
        <li>स्त्रीराज्यातील मच्छिंद्रनाथांचा उद्धार करणारा शिष्य गोरखनाथ</li>
        <li>अद्भूत संजीवनी विद्या, शाबरी मंत्र आणि लोककल्याणकारी लीला</li>
      </ul>
    `,
    author: 'मल्हारी रामराव चिटणीस (सुलभ कथा: प्रल्हाद महाराज)',
    category: 'नवनाथ भक्तिसार',
    categorySlug: 'navanath',
    language: 'मराठी',
    pages: 320,
    format: 'PDF + ePub',
    coverColor: '#5c3d1e',
    coverEmoji: '🕉️',
    coverImage: 'assets/images/books/navanath.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: false,
    isNew: false,
    rating: 4.8,
    ratingCount: 231,
    tags: ['नवनाथ', 'भक्तिसार', 'गोरखनाथ', 'मच्छिंद्रनाथ'],
    tableOfContents: [
      'अध्याय १: नव नारायणांचा कलियुगी अवतार संकल्प',
      'अध्याय २: कवी नारायणाचा अवतार — मच्छिंद्रनाथ जन्मकथा',
      'अध्याय ३: बद्रीकेदार यात्रा व भगवान दत्तात्रेय भेट',
      'अध्याय ४: हरी नारायणाचा अवतार — गोरखनाथ जन्म व बाल्य',
      'अध्याय ५: गोरखनाथांची खडतर गुरुसेवा व परीक्षा',
      'अध्याय ६: जालंदरनाथ व कानिफनाथ जन्मकथा',
      'अध्याय ७: चरपटीनाथ, नागनाथ व भर्तरीनाथ अवतार',
      'अध्याय ८: रेवणनाथ व गहिनीनाथ अवतार लीला',
      'अध्याय ९: स्त्रीराज्यातील मोहातून गुरू मच्छिंद्रनाथांची मुक्ती',
      'अध्याय १०: शाबरी विद्या, मंत्र आणि लोककल्याण',
      'अध्याय ११: संतांचे संरक्षण व दृष्टांतांचे निरूपण',
      'अध्याय १२: नवनाथ भक्तिसार समाप्ती व नित्य पठण फलश्रुती'
    ],
    seoTitle: 'नवनाथ भक्तिसार मराठी ई-बुक | DattaDas.in',
    seoDesc: 'नवनाथ भक्तिसार संपूर्ण कथा मराठी ई-बुक खरेदी करा.',
    createdAt: '2024-01-28',
  },
  {
    id: 'P006',
    slug: 'tripura-rahasya',
    titleMarathi: 'त्रिपुरा रहस्य — ज्ञान खंड मराठी',
    titleEnglish: 'Tripura Rahasya - Jnana Khanda',
    shortDesc: 'भगवान दत्तात्रेयांनी परशुरामाला सांगितलेले अद्वैत आत्मज्ञानाचे आणि महामायेचे परम गुह्य रहस्य.',
    fullDesc: `
      <h3>✨ त्रिपुरा रहस्य — आत्मसाक्षात्काराची परमोच्च गुरुकिल्ली</h3>
      <p>प्राचीन संस्कृत ग्रंथांपैकी अत्यंत गूढ आणि श्रेष्ठ असा <strong>त्रिपुरा रहस्य</strong> हा ग्रंथ भगवान दत्तात्रेय आणि त्यांचे लाडके शिष्य भगवान परशुराम यांच्यातील संवाद आहे. रमण महर्षी यांनी या ग्रंथाची विशेष शिफारस केली होती.</p>
      <h4>📖 ग्रंथातील मुख्य सार:</h4>
      <ul>
        <li>हे जग चित्तस्पंदन कसे आहे आणि दृश्यातीत सत्य काय आहे?</li>
        <li>हेमलेखा आणि हेमकूड राजाची प्रसिद्ध ज्ञानकथा</li>
        <li>जागृती, स्वप्न आणि सुषुप्ती या तिन्हींपलीकडची तुरीयावस्था</li>
      </ul>
    `,
    author: 'भगवान दत्तात्रेय (मराठी निरूपण: श्री. विनायक पेठे)',
    category: 'तत्त्वज्ञान',
    categorySlug: 'tattvagyan',
    language: 'मराठी',
    pages: 248,
    format: 'PDF + ePub',
    coverColor: '#1a3a4e',
    coverEmoji: '✨',
    coverImage: 'assets/images/books/tripura-rahasya.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: false,
    isNew: true,
    rating: 4.9,
    ratingCount: 178,
    tags: ['त्रिपुरा', 'रहस्य', 'परशुराम', 'अद्वैत'],
    tableOfContents: [
      'अध्याय १: परशुरामांचे वैराग्य व भगवान दत्तात्रेयांना शरण जाणे',
      'अध्याय २: महामायेचे स्वरूप व सृष्टीचा आभास',
      'अध्याय ३: राजकुमारी हेमलेखा व राजकुमार हेमकूड संवाद',
      'अध्याय ४: जगाचे मिथ्यात्व व आत्म्याचे सत्यत्व',
      'अध्याय ५: चित्तशुद्धी व अंतर्मुख दृष्टीचा मार्ग',
      'अध्याय ६: समाधीचे प्रकार व जीवनमुक्तीची लक्षणे',
      'अध्याय ७: परशुरामांचा संशय निरास व आत्मबोध प्राप्ती',
      'अध्याय ८: त्रिपुरा रहस्य ज्ञानखंड फलश्रुती'
    ],
    seoTitle: 'त्रिपुरा रहस्य मराठी ई-बुक | DattaDas.in',
    seoDesc: 'दत्तात्रेय-परशुराम संवाद त्रिपुरा रहस्य मराठी ई-बुक.',
    createdAt: '2024-04-05',
  },
  {
    id: 'P007',
    slug: 'sant-eknath-charitra',
    titleMarathi: 'संत एकनाथ महाराज चरित्र व शिकवण',
    titleEnglish: 'Sant Eknath Maharaj Charitra',
    shortDesc: 'शांतीब्रह्म संत एकनाथ महाराजांचे दिव्य जीवनचरित्र, भारुडे आणि दत्तात्रेय कृपाप्रसादाची कथा.',
    fullDesc: `
      <h3>🕊️ शांतीब्रह्म संत एकनाथ महाराज — करुणेचा सागर</h3>
      <p>महाराष्ट्राच्या वारकरी परंपरेत संत एकनाथ महाराजांना 'शांतीब्रह्म' म्हटले जाते. पैठणच्या गोदावरी तीरावर जन्मलेल्या या महात्म्याला गुरु जनार्दन स्वामींच्या कृपेने प्रत्यक्ष भगवान दत्तात्रेयांचे सगुण दर्शन झाले होते.</p>
      <h4>📖 ग्रंथातील प्रमुख जीवनकथा:</h4>
      <ul>
        <li>गुरू जनार्दन स्वामींची निस्सीम सेवा व सुवर्णदुर्ग भेटीतील दत्त साक्षात्कार</li>
        <li>गंगेचे पाणी तहानलेल्या गाढवाला पाजणारा अलौकिक भूतदया प्रसंग</li>
        <li>अंगावर थुंकणाऱ्या यवनाला क्षमा करून ३२ वेळा गोदावरी स्नान करणारी शांतीची परिसीमा</li>
        <li>भागवत धर्म, भावार्थ रामायण, एकनाथी भागवत आणि समाजप्रबोधक भारुडांचे अमृत</li>
      </ul>
    `,
    author: 'डॉ. सदानंद मोरे',
    category: 'संत चरित्रे',
    categorySlug: 'sant-charitra',
    language: 'मराठी',
    pages: 290,
    format: 'PDF + ePub',
    coverColor: '#8B2D3D',
    coverEmoji: '🕊️',
    coverImage: 'assets/images/books/sant-eknath.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: true,
    bestseller: false,
    isNew: false,
    rating: 4.8,
    ratingCount: 198,
    tags: ['एकनाथ', 'संत', 'वारकरी', 'पैठण', 'दत्तकृपा'],
    tableOfContents: [
      'अध्याय १: पैठण नगरी, कुलपरंपरा व एकनाथांचा जन्म',
      'अध्याय २: दौलताबाद येथे जनार्दन स्वामींची भेट व गुरुदीक्षा',
      'अध्याय ३: भगवान दत्तात्रेयांचे प्रत्यक्ष दर्शन व कृपाप्रसाद',
      'अध्याय ४: काशी यात्रा, तीर्थाटन व पैठण येथे पुनरागमन',
      'अध्याय ५: गृहस्थाश्रम, परोपकार व अथांग भूतदया प्रसंग',
      'अध्याय ६: शांतीब्रह्म कसोटी — थुंकणाऱ्या यवनाला क्षमादान',
      'अध्याय ७: एकनाथी भागवत रचना व काशी येथील विजय',
      'अध्याय ८: भावार्थ रामायण व भारुडांद्वारे लोकप्रबोधन',
      'अध्याय ९: विठ्ठल भक्ती व श्रीखंड्या रूपाने साक्षात भगवंताची सेवा',
      'अध्याय १०: जलसमाधी व संत एकनाथ महाराज अमर संदेश'
    ],
    seoTitle: 'संत एकनाथ महाराज चरित्र मराठी ई-बुक | DattaDas.in',
    seoDesc: 'शांतीब्रह्म संत एकनाथ महाराजांचे जीवनचरित्र मराठी ई-बुक ₹६९९ मध्ये.',
    createdAt: '2024-02-15',
  },
  {
    id: 'P008',
    slug: 'shiva-mahapurana-marathi',
    titleMarathi: 'शिव महापुराण — संपूर्ण मराठी सार व कथा',
    titleEnglish: 'Shiva Mahapurana - Marathi Summary & Stories',
    shortDesc: 'भगवान शंकरांचे १२ ज्योतिर्लिंग महात्म्य, पार्वती विवाह, शिव तांडव आणि प्रासादिक शिवकथा.',
    fullDesc: `
      <h3>🔱 शिव महापुराण — महादेवांची मंगलमय कथा</h3>
      <p>अठरा पुराणांमध्ये शिव महापुराणाला अनन्यसाधारण महत्त्व आहे. भगवान भोलेनाथांची कृपा, लिंगोद्भव कथा, सती व पार्वती विवाह, आणि बारा ज्योतिर्लिंगांचे महात्म्य या ग्रंथात रसाळ मराठी भाषेत मांडले आहे.</p>
      <h4>📖 प्रमुख कथा व आख्याने:</h4>
      <ul>
        <li>सृष्टीची उत्पत्ती व ब्रह्मा-विष्णू-महेश संवाद</li>
        <li>समुद्रमंथन आणि हलाहल विष प्राशन करणारे नीलकंठ महादेव</li>
        <li>१२ ज्योतिर्लिंगांची उत्पत्ती आणि पूजा फलश्रुती</li>
        <li>महाशिवरात्री व्रत, रुद्राभिषेक विधी आणि महामृत्युंजय मंत्र साधना</li>
      </ul>
    `,
    author: 'पं. रामकृष्ण शास्त्री',
    category: 'शिवमहापुराण',
    categorySlug: 'shiva-purana',
    language: 'मराठी',
    pages: 380,
    format: 'PDF + ePub',
    coverColor: '#1a1a4e',
    coverEmoji: '🔱',
    coverImage: 'assets/images/books/shiva-mahapurana.jpg',
    regularPrice: 1299,
    salePrice: 699,
    featured: false,
    bestseller: true,
    isNew: false,
    rating: 4.7,
    ratingCount: 267,
    tags: ['शिव', 'महापुराण', 'पुराण', 'ज्योतिर्लिंग', 'भोलेनाथ'],
    tableOfContents: [
      'अध्याय १: विद्येश्वर संहिता — शिवकथेची महती व श्रवण विधी',
      'अध्याय २: रुद्र संहिता — सृष्टी रचना व नारद मोहभंग कथा',
      'अध्याय ३: सती चरित्र — दक्ष यज्ञ विध्वंस व वीरभद्र अवतार',
      'अध्याय ४: पार्वती जन्म, कठोर तपश्चर्या व शिव-पार्वती विवाह',
      'अध्याय ५: कार्तिकेय जन्म, तारकासुर वध व गणेश अवतार',
      'अध्याय ६: समुद्रमंथन, नीलकंठ महादेव व अमृत वाटप',
      'अध्याय ७: १२ ज्योतिर्लिंग महात्म्य (सोमनाथ ते घृष्णेश्वर)',
      'अध्याय ८: कोटिरुद्र संहिता — महाशिवरात्री व्रत व फलश्रुती',
      'अध्याय ९: उमा संहिता — पाप-पुण्य विचार व मोक्ष मार्ग',
      'अध्याय १०: वायवीय संहिता — शिव तांडव व महामृत्युंजय साधना'
    ],
    seoTitle: 'शिव महापुराण मराठी ई-बुक | DattaDas.in',
    seoDesc: 'शिव महापुराण संपूर्ण मराठी कथा व १२ ज्योतिर्लिंग महात्म्य ई-बुक ₹६९९.',
    createdAt: '2024-03-01',
  },
];

// ═══════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════
const DATTADAS_CATEGORIES = [
  { id: 'C001', name: 'श्री गुरुचरित्र', slug: 'gurucharitra', icon: '📿', desc: 'दत्त संप्रदायाचे पवित्र ग्रंथ', count: 8 },
  { id: 'C002', name: 'दत्त संप्रदाय', slug: 'datta-sampraday', icon: '🙏', desc: 'दत्तात्रेयांच्या शिकवणी', count: 12 },
  { id: 'C003', name: 'नवनाथ भक्तिसार', slug: 'navanath', icon: '🕉️', desc: 'नव नाथांच्या लीला', count: 5 },
  { id: 'C004', name: 'शिवमहापुराण', slug: 'shiva-purana', icon: '🔱', desc: 'भगवान शिवाचे महिमान', count: 6 },
  { id: 'C005', name: 'संत चरित्रे', slug: 'sant-charitra', icon: '🕊️', desc: 'महान मराठी संतांचे जीवन', count: 15 },
  { id: 'C006', name: 'पौराणिक कथा', slug: 'puranic-katha', icon: '📖', desc: 'प्राचीन भारतीय कथा', count: 10 },
  { id: 'C007', name: 'स्तोत्रे आणि मंत्र', slug: 'stotre-mantra', icon: '🎵', desc: 'पवित्र मंत्र आणि स्तोत्रे', count: 9 },
  { id: 'C008', name: 'धार्मिक ग्रंथ', slug: 'dharmik-granth', icon: '📚', desc: 'धर्मग्रंथांचा संग्रह', count: 11 },
  { id: 'C009', name: 'तत्त्वज्ञान', slug: 'tattvagyan', icon: '✨', desc: 'आत्मज्ञान आणि तत्त्वज्ञान', count: 7 },
  { id: 'C010', name: 'विशेष संग्रह', slug: 'vishesh-sangraha', icon: '👑', desc: 'दुर्मिळ आणि विशेष ग्रंथ', count: 4 },
];

// ═══════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════
const Store = {
  _state: {
    user: null,
    cart: [],
    wishlist: [],
    orders: [],
    entitlements: [],
  },

  get(key) {
    try {
      const val = localStorage.getItem(`dattadas_${key}`);
      return val ? JSON.parse(val) : this._state[key];
    } catch { return this._state[key]; }
  },

  set(key, value) {
    this._state[key] = value;
    try { localStorage.setItem(`dattadas_${key}`, JSON.stringify(value)); } catch {}
    document.dispatchEvent(new CustomEvent('storeUpdate', { detail: { key, value } }));
  },

  update(key, updater) {
    this.set(key, updater(this.get(key)));
  },
};

// ═══════════════════════════════════════════════
// AUTH SERVICE
// ═══════════════════════════════════════════════
const Auth = {
  currentUser() { return Store.get('user'); },

  register({ name, email, phone, password }) {
    const users = JSON.parse(localStorage.getItem('dattadas_users') || '[]');
    if (users.find(u => u.email === email)) {
      throw new Error('हा ईमेल आधीच नोंदणीकृत आहे.');
    }
    const user = {
      id: 'U' + Date.now(),
      name, email, phone,
      passwordHash: btoa(password),
      createdAt: new Date().toISOString(),
      emailVerified: false,
      role: 'customer',
    };
    users.push(user);
    localStorage.setItem('dattadas_users', JSON.stringify(users));
    const { passwordHash, ...safeUser } = user;
    Store.set('user', safeUser);
    return safeUser;
  },

  login({ email, password }) {
    const users = JSON.parse(localStorage.getItem('dattadas_users') || '[]');
    const user = users.find(u => u.email === email);
    if (!user) throw new Error('हा ईमेल नोंदणीकृत नाही.');
    if (user.passwordHash !== btoa(password)) throw new Error('चुकीचा पासवर्ड.');
    const { passwordHash, ...safeUser } = user;
    Store.set('user', safeUser);
    return safeUser;
  },

  loginAdmin({ email, password }) {
    if (email === 'admin@dattadas.in' && password === 'DattaAdmin@2024') {
      const admin = { id: 'ADMIN001', name: 'DattaDas Admin', email, role: 'admin' };
      Store.set('user', admin);
      return admin;
    }
    throw new Error('Invalid admin credentials');
  },

  logout() {
    Store.set('user', null);
    Store.set('cart', []);
  },

  isAdmin() {
    const user = this.currentUser();
    return user && user.role === 'admin';
  },

  isCustomer() {
    return !!this.currentUser();
  },
};

// ═══════════════════════════════════════════════
// CART SERVICE
// ═══════════════════════════════════════════════
const Cart = {
  get() { return Store.get('cart') || []; },

  add(productId) {
    const cart = this.get();
    if (cart.find(item => item.productId === productId)) return false;
    const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
    if (!product) return false;
    cart.push({
      productId,
      title: product.titleMarathi,
      price: product.salePrice,
      originalPrice: product.regularPrice,
      coverImage: product.coverImage,
      coverEmoji: product.coverEmoji,
      coverColor: product.coverColor,
      addedAt: new Date().toISOString(),
    });
    Store.set('cart', cart);
    return true;
  },

  remove(productId) {
    Store.update('cart', cart => (cart || []).filter(i => i.productId !== productId));
  },

  clear() { Store.set('cart', []); },

  count() { return (this.get() || []).length; },

  subtotal() { return (this.get() || []).reduce((s, i) => s + i.price, 0); },
  
  originalTotal() { return (this.get() || []).reduce((s, i) => s + i.originalPrice, 0); },
  
  savings() { return this.originalTotal() - this.subtotal(); },

  hasProduct(id) { return !!(this.get() || []).find(i => i.productId === id); },
};

// ═══════════════════════════════════════════════
// WISHLIST SERVICE
// ═══════════════════════════════════════════════
const Wishlist = {
  get() { return Store.get('wishlist') || []; },

  toggle(productId) {
    const list = this.get();
    const idx = list.indexOf(productId);
    if (idx > -1) {
      Store.set('wishlist', list.filter(id => id !== productId));
      return false;
    } else {
      Store.set('wishlist', [...list, productId]);
      return true;
    }
  },

  has(productId) { return this.get().includes(productId); },
  count() { return this.get().length; },
};

// ═══════════════════════════════════════════════
// ORDER SERVICE
// ═══════════════════════════════════════════════
const Orders = {
  get() { return JSON.parse(localStorage.getItem('dattadas_orders') || '[]'); },

  getUserOrders(userId) { return this.get().filter(o => o.userId === userId); },

  getEntitlements(userId) {
    const orders = this.getUserOrders(userId).filter(o => o.status === 'paid');
    return orders.flatMap(o => o.items.map(i => i.productId));
  },

  hasEntitlement(userId, productId) {
    return this.getEntitlements(userId).includes(productId);
  },

  create({ userId, items, paymentMethod, couponCode }) {
    const orders = this.get();
    const order = {
      id: 'ORD' + Date.now(),
      userId,
      items,
      subtotal: items.reduce((s, i) => s + i.price, 0),
      originalTotal: items.reduce((s, i) => s + i.originalPrice, 0),
      savings: items.reduce((s, i) => s + (i.originalPrice - i.price), 0),
      status: 'pending',
      paymentMethod,
      couponCode: couponCode || null,
      createdAt: new Date().toISOString(),
      razorpayOrderId: 'rz_test_' + Math.random().toString(36).substr(2, 12),
    };
    orders.push(order);
    localStorage.setItem('dattadas_orders', JSON.stringify(orders));
    return order;
  },

  markPaid(orderId, paymentId) {
    const orders = this.get();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'paid';
      order.paymentId = paymentId;
      order.paidAt = new Date().toISOString();
      localStorage.setItem('dattadas_orders', JSON.stringify(orders));
    }
    return order;
  },

  all() { return this.get(); },
};

// ═══════════════════════════════════════════════
// DOWNLOAD SERVICE
// ═══════════════════════════════════════════════
const Downloads = {
  generateLink(productId, userId) {
    const token = btoa(`${productId}:${userId}:${Date.now() + 3600000}`);
    return `download.html?token=${token}&product=${productId}`;
  },

  log(productId, userId) {
    const logs = JSON.parse(localStorage.getItem('dattadas_downloads') || '[]');
    logs.push({ productId, userId, timestamp: new Date().toISOString() });
    localStorage.setItem('dattadas_downloads', JSON.stringify(logs));
  },

  verifyToken(token, productId, userId) {
    try {
      const decoded = atob(token);
      const [pId, uId, expiry] = decoded.split(':');
      return pId === productId && uId === userId && Date.now() < parseInt(expiry);
    } catch { return false; }
  },
};

// ═══════════════════════════════════════════════
// COUPON SERVICE
// ═══════════════════════════════════════════════
const Coupons = {
  _list: [
    { code: 'DATTA100', type: 'fixed', value: 100, minOrder: 699, active: true },
    { code: 'WELCOME10', type: 'percent', value: 10, minOrder: 0, active: true },
    { code: 'GURU200', type: 'fixed', value: 200, minOrder: 1000, active: true },
  ],

  validate(code, cartTotal) {
    const coupon = this._list.find(c => c.code === code.toUpperCase() && c.active);
    if (!coupon) throw new Error('अवैध किंवा कालबाह्य कूपन.');
    if (cartTotal < coupon.minOrder) throw new Error(`किमान ₹${coupon.minOrder} ची खरेदी आवश्यक.`);
    const discount = coupon.type === 'fixed'
      ? Math.min(coupon.value, cartTotal)
      : Math.round(cartTotal * coupon.value / 100);
    return { coupon, discount };
  },
};

// ═══════════════════════════════════════════════
// TOAST NOTIFICATION
// ═══════════════════════════════════════════════
const Toast = {
  _container: null,

  init() {
    if (!this._container) {
      this._container = document.createElement('div');
      this._container.className = 'toast-container';
      document.body.appendChild(this._container);
    }
  },

  show(message, type = 'info', duration = 4000) {
    this.init();
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
    this._container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg)   { this.show(msg, 'error'); },
  warning(msg) { this.show(msg, 'warning'); },
  info(msg)    { this.show(msg, 'info'); },
};

// ═══════════════════════════════════════════════
// PRICE FORMATTER
// ═══════════════════════════════════════════════
const Price = {
  format(amount) {
    return '₹' + amount.toLocaleString('mr-IN');
  },
  discount(regular, sale) {
    return Math.round((regular - sale) / regular * 100);
  },
  savings(regular, sale) {
    return regular - sale;
  },
};

// ═══════════════════════════════════════════════
// INTERSECTION OBSERVER (Scroll Animations)
// ═══════════════════════════════════════════════
const Animate = {
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });
  },
};

// ═══════════════════════════════════════════════
// GLOBAL UI HELPERS
// ═══════════════════════════════════════════════
const UI = {
  openModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  closeModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('active'); document.body.style.overflow = ''; }
  },
  closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(el => {
      el.classList.remove('active');
    });
    document.body.style.overflow = '';
  },
  openDrawer(id) {
    const el = document.getElementById(id);
    const overlay = document.getElementById(id + '-overlay');
    if (el) el.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  closeDrawer(id) {
    const el = document.getElementById(id);
    const overlay = document.getElementById(id + '-overlay');
    if (el) el.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  updateCartBadges() {
    const count = Cart.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateWishlistBadges() {
    const count = Wishlist.count();
    document.querySelectorAll('.wishlist-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  renderBookCard(product, options = {}) {
    const disc = Price.discount(product.regularPrice, product.salePrice);
    const inCart = Cart.hasProduct(product.id);
    const inWishlist = Wishlist.has(product.id);
    const coverImgTag = product.coverImage 
      ? `<img src="${product.coverImage}" alt="${product.titleMarathi}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.9;">`
      : '';

    return `
    <article class="book-card card reveal" data-product-id="${product.id}">
      <div class="book-cover" style="--cover-color:${product.coverColor};position:relative;overflow:hidden;">
        ${coverImgTag}
        <div class="book-cover-inner" style="position:relative;z-index:2;background:rgba(0,0,0,0.45);width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;">
          <div class="book-cover-emoji" style="font-size:2rem;margin-bottom:6px;">${product.coverEmoji}</div>
          <div class="book-cover-title" style="color:white;font-weight:700;text-shadow:0 2px 4px rgba(0,0,0,0.8);">${product.titleMarathi}</div>
        </div>
        <div class="book-badges" style="z-index:3;">
          ${product.bestseller ? '<span class="book-badge badge-gold">बेस्टसेलर</span>' : ''}
          ${product.isNew ? '<span class="book-badge badge-saffron">नवीन</span>' : ''}
          <span class="book-badge badge-discount">${disc}% सूट</span>
        </div>
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="handleWishlist('${product.id}', this)" aria-label="आवडी" style="z-index:3;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <div class="book-card-body">
        <div class="book-category">${product.category}</div>
        <h3 class="book-title"><a href="product.html?id=${product.id}">${product.titleMarathi}</a></h3>
        <p class="book-author">${product.author}</p>
        <div class="book-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-val">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <p class="book-desc">${product.shortDesc}</p>
        <div class="book-meta-row">
          <span>${product.pages} पाने</span>
          <span>${product.format}</span>
        </div>
        <div class="price-wrapper">
          <span class="price-current">${Price.format(product.salePrice)}</span>
          <span class="price-original">${Price.format(product.regularPrice)}</span>
          <span class="discount-pill">${disc}%</span>
        </div>
        <div class="book-actions">
          <button class="btn btn-primary btn-sm w-full ${inCart ? 'in-cart' : ''}" 
            onclick="handleAddToCart('${product.id}', this)">
            ${inCart ? '✓ कार्टमध्ये आहे' : 'कार्टमध्ये जोडा'}
          </button>
          <a href="product.html?id=${product.id}" class="btn btn-outline-maroon btn-sm">
            तपशील
          </a>
        </div>
      </div>
    </article>`;
  },
};

// ═══════════════════════════════════════════════
// EVENT HANDLERS
// ═══════════════════════════════════════════════
function handleAddToCart(productId, btn) {
  const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (Cart.hasProduct(productId)) {
    UI.openDrawer('cart-drawer');
    return;
  }

  if (Cart.add(productId)) {
    if (btn) {
      btn.textContent = '✓ कार्टमध्ये आहे';
      btn.classList.add('in-cart');
    }
    UI.updateCartBadges();
    Toast.success(`"${product.titleMarathi}" कार्टमध्ये जोडले!`);
    UI.openDrawer('cart-drawer');
  }
}

function handleWishlist(productId, btn) {
  const product = DATTADAS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const added = Wishlist.toggle(productId);
  if (btn) {
    btn.classList.toggle('active', added);
    btn.querySelector('svg').setAttribute('fill', added ? 'currentColor' : 'none');
  }
  UI.updateWishlistBadges();
  Toast.info(added ? `"${product.titleMarathi}" आवडीमध्ये जोडले!` : 'आवडीमधून काढले');
}

function handleBuyNow(productId) {
  Cart.clear();
  Cart.add(productId);
  UI.updateCartBadges();
  window.location.href = 'checkout.html';
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('loaded'), 1800);
  }

  Animate.init();

  UI.updateCartBadges();
  UI.updateWishlistBadges();

  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  let lastScrollY = window.scrollY;
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      if (currentY > 100 && currentY > lastScrollY) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) UI.closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') UI.closeAllModals();
  });

  document.addEventListener('storeUpdate', ({ detail: { key } }) => {
    if (key === 'cart') UI.updateCartBadges();
    if (key === 'wishlist') UI.updateWishlistBadges();
  });
});

// Expose globals
window.DATTADAS_PRODUCTS = DATTADAS_PRODUCTS;
window.DATTADAS_CATEGORIES = DATTADAS_CATEGORIES;
window.Store = Store;
window.Auth = Auth;
window.Cart = Cart;
window.Wishlist = Wishlist;
window.Orders = Orders;
window.Downloads = Downloads;
window.Coupons = Coupons;
window.Toast = Toast;
window.Price = Price;
window.UI = UI;
window.handleAddToCart = handleAddToCart;
window.handleWishlist = handleWishlist;
window.handleBuyNow = handleBuyNow;
