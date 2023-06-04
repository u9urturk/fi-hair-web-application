import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function MetaUpdate() {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)

    const metaContents = [
      {
        path:"/",
        content:"FiHair-Saç Ekimi İle Kalıcı Çözümler | Zonguldak Bölgesindeki Profesyonel Saç Ekimi Kliniği-Zonguldak,Bartın,Karabük Saç Ekimi",
        title:"Fi Hair - Doğal Görünümlü Saç Ekimi-Zonguldak Saç Ekimi"
      },
      {
        path:"/hakkimizda",
        content:"Zonguldak'da Saç Ekimi: Deneyimli Ekip, İleri Teknoloji ve Memnuniyet Garantisi",
        title:"FiHair | Zonguldak'da Saç Ekimi Uzmanı"
      },
      {
        path:"/sac-ekimi",
        content:"Saç Ekimi Kliniği'nde en son teknolojilerle gerçekleştirilen saç ekimi işlemlerimiz hakkında detaylı bilgi alın.",
        title:"Saç Ekimi | FiHair Zonguldak'ta Uzman Saç Ekimi Hizmetleri"
      },
      {
        path:"/teknikler/dhi",
        content: "DHI (Direct Hair Implantation) tekniğiyle gerçekleştirilen saç ekimi ile doğal ve kalıcı sonuçlar elde edin.",
        title:"DHI Tekniği ile Saç Ekimi | FiHair Zonguldak"
      },
      {
        path:"/teknikler/safir-fue",
        content:"Safir FUE tekniğiyle gerçekleştirilen saç ekimi işlemlerimiz hakkında daha fazla bilgi edinin ve sonuçları keşfedin.",
        title:"Safir FUE Tekniği ile Saç Ekimi | FiHair Zonguldak"
      },
      {
        path:"/hizmetler/sac-ekimi",
        content:"Saç Ekimi Kliniği olarak uzman ekibimizle profesyonel saç ekimi hizmetleri sunmaktayız. Hizmetlerimiz hakkında daha fazla bilgi alın.",
        title:"Saç Ekimi Hizmetleri | FiHair Zonguldak'ta Uzman Saç Ekimi"
      },
      {
        path:"/hizmetler/sac-analizi",
        content:"Saç analizi ile saçınızın durumu hakkında detaylı bilgi edinin ve uygun tedavi seçeneklerini öğrenin.",
        title:"Saç Analizi | FiHair Zonguldak Saç Ekimi Kliniği"
      },
      {
        path:"/hizmetler/mezoterapi",
        content: "Mezoterapi ile saç sağlığınızı destekleyin ve saç dökülmesi sorununa etkili bir çözüm bulun.",
        title:"Mezoterapi | FiHair Zonguldak Saç Ekimi Uzmanı"
      },
      {
        path:"/hizmetler/prp",
        content:"PRP (Platelet Rich Plasma) tedavisi ile saçınızın doğal iyileşme sürecini destekleyin ve saç gelişimini teşvik edin.",
        title:"PRP Tedavisi | FiHair Zonguldak Saç Ekimi Kliniği"
      },
      {
        path:"/contact",
        content:"Bize ulaşın ve randevu almak için iletişim bilgilerimizi kullanın. Saç ekimi hakkında sorularınızı yanıtlayalım.",
        title:"İletişim | FiHair Zonguldak Saç Ekimi Kliniği"
      },
      {
        path:"/privacy-policy",
        content:"Saç Ekimi Kliniği olarak gizlilik politikamızı ve kişisel verilerinizi nasıl koruduğumuzu öğrenin.",
        title:"Gizlilik Politikası | FiHair Zonguldak Saç Ekimi Kliniği"
      }
    ]

    useEffect(() => {
        const result = metaContents.find((res) =>res.path===currentPath)
        // console.log(result)
        const updateMetaTags = () => {
          const metaTags = document.getElementsByTagName('meta');
          const titles = document.getElementsByTagName('title')
          //console.log(titles[0].nodeName)
          for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            if (title.nodeName === 'TITLE') {  
              // title.setAttribute('content', result.content); // Yeni meta açıklamasını burada ayarlayın
              title.innerHTML = result.title
            }
          }
          for (let i = 0; i < metaTags.length; i++) {
            const metaTag = metaTags[i];
            if (metaTag.getAttribute('name') === 'description') {  
              metaTag.setAttribute('content', result.content); // Yeni meta açıklamasını burada ayarlayın
              // console.log(metaTag.getAttribute('content'))
            }
          }
        };
    
        updateMetaTags();
      }, [currentPath]);
  return null;
}
