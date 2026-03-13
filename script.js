const allProducts = [
            // --- GIỮ NGUYÊN FULL SẢN PHẨM & GIÁ CỦA BẠN ---
            // --- ĐIỆN TRỞ ---
            { id: 1, cat: 'Điện trở 100R 1/4W', name: 'Điện trở 100R 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 2, cat: 'Điện trở 1K 1/4W', name: 'Điện trở 1K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 3, cat: 'Điện trở 10K 1/4W', name: 'Điện trở 10K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 4, cat: 'Điện trở 100K 1/4W', name: 'Điện trở 100K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 5, cat: 'Điện trở 220R 1/4W', name: 'Điện trở 220R 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 6, cat: 'Điện trở 2.2K 1/4W', name: 'Điện trở 2.2K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 7, cat: 'Điện trở 22K 1/4W', name: 'Điện trở 22K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 8, cat: 'Điện trở 220K 1/4W', name: 'Điện trở 220K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 9, cat: 'Điện trở 330R 1/4W', name: 'Điện trở 330R 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 10, cat: 'Điện trở 3.3K 1/4W', name: 'Điện trở 3.3K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 11, cat: 'Điện trở 33K 1/4W', name: 'Điện trở 33K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 12, cat: 'Điện trở 470R 1/4W', name: 'Điện trở 470R 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },
            { id: 13, cat: 'Điện trở 4.7K 1/4W', name: 'Điện trở 4.7K 1/4W', price: 500, img: 'https://sf-static.upanhlaylink.com/img/image_202603106445ba88e6fdce1abdfedb3afa547882.jpg' },

            // --- NÚT NHẤN ---
            { id: 14, cat: 'Nút nhấn nhả', name: 'Nút nhấn nhả 6x6x5mm', price: 3000, img: 'https://sf-static.upanhlaylink.com/img/image_202603104867f96e5246d8d486975a32a8d51291.jpg' },
            { id: 15, cat: 'Nút nhấn giữ', name: 'Nút nhấn giữ 6x6x5mm', price: 2000, img: 'https://sf-static.upanhlaylink.com/img/image_202603104867f96e5246d8d486975a32a8d51291.jpg' },
            { id: 16, cat: 'Nút nhấn tròn 2 chân', name: 'Nút nhấn tròn đỏ 2 chân', price: 1500, img: 'https://sf-static.upanhlaylink.com/img/image_20260310f21896a17c9b2cb5b6d3c28a1334df29.jpg' },
            { id: 17, cat: 'Nút Nhấn 6X6X5MM 2 Chân Cắm', name: 'Nút Nhấn 6X6X5MM 2 Chân Cắm', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310832265522ac3bdd4f1f765abad1c131f.jpg' },
            { id: 18, cat: 'Nút Nhấn 6X6X5MM 4 Chân Cắm', name: 'Nút Nhấn 6X6X5MM 4 Chân Cắm', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_202603103f63a56d568526e4fad896e98807d688.jpg' },

            // --- CÔNG TẮC ---
            { id: 19, cat: 'Công tắc gạt SS12D00', name: 'Công tắc gạt SS12D00', price: 1500, img: 'https://sf-static.upanhlaylink.com/img/image_20260310c60a6ca984cbd02f6de35d70f644522a.jpg' },
            { id: 20, cat: 'Công tắc KCD1-21 màu đỏ', name: 'Công tắc KCD1-21 màu đỏ', price: 4000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310b94098175f808c46196fb87e4339e4f4.jpg' },
            { id: 21, cat: 'Công tắc KCD1 23MM màu đỏ', name: 'Công tắc KCD1 23MM màu đỏ', price: 8000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310ff74123e6a49bce14cbd6a2bbd2fde0d.jpg' },

            // --- LED ---
            {id: 22, cat: 'Led trong 3mm màu trắng', name: 'Led trong 3mm màu trắng', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310873d0ac61919330b223cdf69d23eeefd.jpg' },
            {id: 23, cat: 'Led đục 3mm màu đỏ', name: 'Led đục 3mm màu đỏ', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310962877bc32a2740ee02da483655a6bd6.jpg' },
            {id: 24, cat: 'Led đục 3mm màu vàng', name: 'Led đục 3mm màu vàng', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310962877bc32a2740ee02da483655a6bd6.jpg' },
            {id: 25, cat: 'Led đục 3mm màu xanh dương', name: 'Led đục 3mm màu xanh dương', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310962877bc32a2740ee02da483655a6bd6.jpg' },
            {id: 26, cat: 'Led đục 3mm màu xanh lá', name: 'Led đục 3mm màu xanh lá', price: 1000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310962877bc32a2740ee02da483655a6bd6.jpg' },

            // --- JACK ---
            {id: 27, cat: 'Jack đầu Cắm Nguồn Cái DC-005', name: 'Jack đầu Cắm Nguồn Cái DC-005', price: 3500, img: 'https://sf-static.upanhlaylink.com/img/image_20260310600cf25dc2dca321a58e7762feef3e41.jpg' },
            {id: 28, cat: 'Jack nguồn DC022 5.5*2.1MM', name: 'Jack nguồn DC022 5.5*2.1MM', price: 2500, img: 'https://sf-static.upanhlaylink.com/img/image_20260310afbd29f0a22911801c84cee1afaf1621.jpg' },
            {id: 29, cat: 'Jack DC 5.5X2.1 DC Male', name: 'Jack DC 5.5X2.1 DC Male', price: 4000, img: 'https://sf-static.upanhlaylink.com/img/image_20260310939ddbe2a48ac57e2543eb4d3cf14730.jpg' },

            // --- MÀN HÌNH ---
            {id: 30, cat: 'Màn hình LCD 0.96inch trắng', name: 'Màn hình LCD 0.96inch trắng', price: 68000, img: 'https://sf-static.upanhlaylink.com/img/image_202603117ab1558f195892f05836ce12d2493f8b.jpg' },
            {id: 31, cat: 'Màn hình LCD 0.96inch xanh lam', name: 'Màn hình LCD 0.96inch xanh lam', price: 68000, img: 'https://sf-static.upanhlaylink.com/img/image_202603118f367cdbaa9baab50fb650a0544dc6a6.jpg' },
            {id: 32, cat: 'Màn hình LCD 1.54inch', name: 'Màn hình LCD 1.54inch', price: 88000, img: 'https://sf-static.upanhlaylink.com/img/image_20260311bf0902cdaa6c35aaa89bbb418c4ebc6f.jpg' },
            {id: 33, cat: 'Màn hình LCD 1602 xanh lá 5V', name: 'Màn hình LCD 1602 xanh lá 5V', price: 38000, img: 'https://sf-static.upanhlaylink.com/img/image_2026031135030154017728abb3e8c24bf10a099d.jpg' },
            {id: 34, cat: 'Màn hình LCD 1602 xanh dương 5V', name: 'Màn hình LCD 1602 xanh dương 5V', price: 48000, img: 'https://sf-static.upanhlaylink.com/img/image_202603113a71f22a6c761d301c1146be92b40fa2.jpg' },
    
            {id: 35, cat: 'Màn hình TFT 1.3inch', name: 'Màn hình TFT 1.3inch', price: 78000, img: 'https://sf-static.upanhlaylink.com/img/image_202603116eb210b2613b6945d272ae683710a946.jpg' },
            {id: 36, cat: 'Màn hình TFT 1.44inch', name: 'Màn hình TFT 1.44inch', price: 88000, img: 'https://sf-static.upanhlaylink.com/img/image_20260311a2fd54ae4bf559091e3d4f298e3d9424.jpg' },
            {id: 37, cat: 'Màn hình TFT 1.8inch', name: 'Màn hình TFT 1.8inch', price: 98000, img: 'https://sf-static.upanhlaylink.com/img/image_202603110388948cfc9daece9b78e8b2efb6332e.jpg' },

        ];
function renderProducts(grid,list){

grid.innerHTML=list.map(p=>`

<div class="product-card">

<img src="${p.img}">

<div class="product-name">${p.name}</div>

<div class="price">${p.price.toLocaleString()}₫</div>

<button onclick="addToCart(${p.id})">Thêm giỏ</button>

</div>

`).join('');

}