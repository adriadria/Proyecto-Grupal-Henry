const Product = require('../models/Product');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/requests');

const products = [
    new Product({
        image_url: 'https://i.pinimg.com/564x/a0/f8/59/a0f8599693c240ae3a198e3c88a27afa.jpg',
        name: 'Silla Matera Poltrona',
        description: 'Cuerpo/estructura en madera super resistente. Goma espuma de alta densidad. Tapizado en tela. Medidas: Alto hasta el asiento 43CM, hasta el respaldo 73CM; Profundidad 65CM; Frente 62CM',
        price: 45.00,
        categories: ["612f4aed57310b456426df44", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Silla Gallery Ronda Silver',
        description: 'La mejor opción en cuanto a confort y diseño es esta fantástica silla, la cual es un excelente complemento para tu comedor. Se caracteriza por su sencilla estructura de madera sólida, así como el detalle con botones en las costuras que hacen la diferencia total en cuanto al diseño. Personalizala a tu gusto, selecciona el material y color para tus sillas, hazlo unico, hazlo tuyo, como siempre lo quisiste. Medidas: Largo 54 X Ancho 66 X Alto 95 ',
        price: 800.00,
        categories: ["612f4aed57310b456426df44", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://desillas.com/img/productos/EJKREB_32.jpg',
        name: 'Silla Luis XV estilo provenzal',
        description: 'Silla francesa clásica en madera de Cedro Rojo, con tapiz importado francés, labrado a mano por ebanistas. Medidas: 1,10 de ALTURA, X 50 CM. DE ANCHO X 50 CM. DE FONDO.',
        price: 250.00,
        categories: ["612f4aed57310b456426df44", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://x2j7p2t4.rocketcdn.me/wp-content/uploads/2020/08/Silla-Mosart-Warest-Black.jpg',
        name: 'Silla Mosart Ronda Blank',
        description: 'Si buscas tendencia, la silla mosart de caracteriza por su original diseño. Además su estructura esta hecha totalmente de madera sólida de parota lo que le da un terminado aún más fino. Elige el tápiz que más te agrade y no lo pienses más, es momento de atreverte. Medidas: Largo 50 X Ancho 60 X Alto 80',
        price: 290.00,
        categories: ["612f4aed57310b456426df44", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://http2.mlstatic.com/D_NQ_NP_828386-MLM45827447326_052021-O.webp',
        name: 'Silla Diamante',
        description: 'Silla de madera sólida de pino. La cubierta de chapa de encino. Medidas: 110cm alto 45cm fondo 45cm ancho 45cm del suelo al asiento',
        price: 145.00,
        categories: ["612f4aed57310b456426df44", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-de-metal-blanco-y-abeto-con-1-cajon-y-1-puerta-1000-4-2-192784_1.jpg',
        name: 'Escritorio Sunset',
        description: 'Escritorio de metal blanco y abeto con 1 cajón y 1 puerta',
    price: 239.00,
        categories: ["612f4aed57310b456426df43"]
    }),
    new Product({
            image_url: 'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-blanco-con-4-cajones-1000-16-7-170526_1.jpg',
            name: 'Escritorio Joy',
            description: 'Escritorio blanco con 4 cajones',
        price: 299.00,
        categories: ["612f4aed57310b456426df43"]
    }),
    new Product({
            image_url: 'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-vintage-gris-antracita-con-2-cajones-1000-3-11-180985_1.jpg',
            name: 'Escritorio ZEN MARKET',
            description: 'Escritorio vintage gris antracita con 2 cajones',
        price: 229.00,
        categories: ["612f4aed57310b456426df43"]
    }),
    new Product({
            image_url: 'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/escritorio-de-3-cajones-color-blanco-1000-4-7-209189_1.jpg',
            name: 'Escritorio Spring',
            description: 'Escritorio de 3 cajones color blanco',
        price: 149.00,
        categories: ["612f4aed57310b456426df43"]
    }),
    new Product({
            image_url: 'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/escritorio-vintage-2-cajones-1000-2-15-138841_1.jpg',
            name: 'Escritorio Fjord',
            description: 'Escritorio vintage 2 cajones',
            price: 229.00,
        categories: ["612f4aed57310b456426df43"]
    }),
    new Product({
        image_url: 'https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/m/e/mesa_decomedor_coma_200cm_encino_still1_v1.jpg',
        name: 'Mesa de comedor Coma',
        description: 'Sus finos acabados, así como su material resistente la convierte en la candidata ideal para formar parte de tu hogar.',
        price: 1159.00,
        categories: ["612f4aed57310b456426df43", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/m/e/mesa_de_comedor_xoco_120cm_nogal_still2_v1.jpg',
        name: 'Mesa de comedor Xoco',
        description: 'El momento ideal para convivir en familia es a la hora disfrutar de los alimentos, es por ello que es importante tener una mesa que te invite a disfrutar de ese tiempo.',
        price: 699.00,
        categories: ["612f4aed57310b456426df43", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/m/e/mesa_de_comedor_penon_nogal_still1_v3.jpg',
        name: 'Mesa de comedor Peñón',
        description: 'Esta mesa de comedor combina lo clásico y limpio del diseño, es el complemento perfecto para tu espacio.',
        price: 799.00,
        categories: ["612f4aed57310b456426df43", "612f4aed57310b456426df41"]
    }),
    new Product({
        image_url: 'https://platinumshop.com.ar/208-home_default/placard-max-3-puertas-corredizas-3-cajones-tabaco.jpg',
        name: 'Placard Max',
        description: 'Novedoso Placard max 3 puertas corredizas, con baulera incorporada y 3 cajones en la parte inferior.',
        price: 31956.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://platinumshop.com.ar/226-home_default/placard-base-2-puertas-2-cajones-blanco-veta.jpg',
        name: 'Placard Veta',
        description: 'Este práctico placard está diseñado para organizar tu ropa ya sea para colgar como para doblar, sin ocupar un espacio significativo dentro de tu ambiente. Consta de 2 cajones con correderas metálicas y 1 un barral y 1 estante interno sobre cajones',
        price: 8419.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://platinumshop.com.ar/237-home_default/placard-base-4-puertas-2-cajones-tabaco.jpg',
        name: 'Placard Base',
        description: 'Armario ideal para optimizar el espacio de guardado en el dormitorio. Su diseño contemporaneo permite que se adapte a dormitorios de todos los estilos decorativos. Construído en melamina de 15 mm de espesor, de fácil limpieza y mantenimiento. Esta línea de muebles viene desarmada, preparada para ensamblar de manera rápida y simple.',
        price: 14167.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
new Product({
        image_url: 'https://platinumshop.com.ar/802-home_default/placard-plus-6-puertas-3-cajones-gris-andino.jpg',
        name: 'Placard Plus',
        description: 'Te presentanos el nuevo placard de 6 puertas y 3 cajones. Su color en tonalidad Roble, Cedro y Tabaco lo convierte en una opción clásica para cualquier tipo de ambiente.',
        price: 23765.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://platinumshop.com.ar/462-home_default/placard-premium-2-puertas-corredizas-2-cajones-tabaco.jpg',
        name: 'Placard Premium',
        description: 'Un amplio placard de 2 puertras corredizas con guías de aluminio en su parte superior e inferior con su correspondiente sistema de rodamientos en ambos extremos que garantiza un suave deslizamiento en sus aberturas. Además, el sistema de manija lateral de aluminio que ocupa el alto total de la puerta, favorece su protección y funcionalidad, brindándole también un acabado estético moderno y delicado. Los cajones son deslizables sobre correderas metálicas y poseen además todo el interior revestido.',
        price: 26801.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/kura-cama-reversible-blanco-pino__0179751_pe331953_s5.jpg?f=xl',
        name: 'Cama Kura',
        description: 'Cama reversible, blanco/pino, medidas 90x200 cm. Una cama baja ideal para los niños más pequeños. Y cuando crecen, la cama lo hace con ellos: con sólo girar lo de abajo arriba se convierte en un espacio para jugar.',
        price: 100.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/bjorksnas-estructura-cama-abedul-lonset__0948892_pe799357_s5.jpg?f=xl',
        name: 'Cama Bjorksnas',
        description: 'La madera maciza de abedul es un material resistente y natural que presenta variaciones en la veta, el color y la textura, por lo que cada pieza es única. Al tener todos los detalles cuidados, en todos los lados, se puede colocar en el centro de la habitación.',
        price: 120.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/malm-estructura-cama-blanco__0637620_pe704551_s5.jpg?f=xl',
        name: 'Cama Malm',
        description: 'Estructura de cama, blanco, medidas 90x200 cm. Una cama con un diseño sencillo y bonito por todos los lados, para que puedas ponerla en el centro de la habitación o con el cabecero contra la pared. Si necesitas espacio para guardar ropa de cama, añade unas cajas de almacenaje de cama con ruedas MALM.',
        price: 88.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/idanas-estructura-cama-blanco-lonset__0916067_pe784943_s5.jpg?f=xl',
        name: 'Cama Idanas',
        description: 'Estructura de cama, blanco/Lönset, medidas 160x200 cm. La cama cuenta con una estructura fuerte y resistente, para que te dure muchos años. Resulta muy fácil pasar la aspiradora por debajo de la cama.',
        price: 250.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/songesand-estructura-cama-blanco-luroy__0638583_pe699000_s5.jpg?f=xl',
        name: 'Cama Songesand',
        description: 'Estructura de cama, blanco/Luröy, medidas 160x200 cm. Una estructura de cama robusta con bordes redondeados y patas altas. Un estilo clásico que durará muchos años. Puedes completarla con unas cajas de almacenaje SONGESAND para guardar sábanas y ropa debajo de la cama y ahorrar espacio.',
        price: 175.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ikea.com/es/es/images/products/hemnes-estructura-cama-tinte-blanco__0637616_pe698429_s5.jpg?f=xl',
        name: 'Cama Hemnes',
        description: 'Estructura cama, tinte blanco, medidas 90x200 cm. Belleza sostenible gracias a su madera maciza procedente de fuentes sostenibles, un material duradero y renovable que conserva su carácter con el paso de los años. Combina a la perfección con el resto de los muebles.',
        price: 159.00,
        categories: ["612f4aed57310b456426df45", "612f4aed57310b456426df42"]
    }),
    new Product({
        image_url: 'https://www.ferreteria.shop/img/cms/archivos/herrajes-para-armarios.jpg',
        name: 'Placard Grande',
        description: 'Placard grande y funcional, entra toda tu ropa, medidas 180 cm de alto, 300 cm de largo',
        price: 300.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'http://promart.vteximg.com.br/arquivos/ids/641215-275-275/image-6d50f13cdbf1424abf32c4f0f2c61815.jpg',
        name: 'Placard mediano',
        description: 'Placard mediano de madera funcinoal, medidas 180 cm de alto, 200 cm de largo ',
        price: 260.00,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://m.media-amazon.com/images/I/41oOCbVkXRS.jpg',
        name: 'Placard pequeño de madera',
        description: 'Placard pequeño de madera funcinoal, medidas 160 cm de alto, 180 cm de largo ',
        price: 259.99,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'promart.vteximg.com.br/arquivos/ids/881175-1000-1000/image-e5eee50682974fae8b459f972864234a.jpg',
        name: 'Placar lona para niños',
        description: 'Placard de lona mediano para niños, funcional puede ubicarse en cualquier lugar, minimo mantenimiento, medidas 160 cm de alto, 180 cm de largo ',
        price: 199.99,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    }),
    new Product({
        image_url: 'https://www.hola.com/imagenes/decoracion/20210127183295/armario-ropero-habitaciones-infantiles-diy-mc/0-913-766/armario-ropero-infantil-m.jpg',
        name: 'Mini placard de madera para niños',
        description: 'Placard de madera pequeño para niños, funcional puede ubicarse en cualquier lugar de la casa, por su tamaño minimo es ideal como el primer placar, medidas 160 cm de alto, 120 cm de largo ',
        price: 189.99,
        categories: ["612f4aed57310b456426df42", "612f4aed57310b456426df4a"]
    })
];
var done = 0;
for(let i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if(done === products.length) {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}