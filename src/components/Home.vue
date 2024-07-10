<template>
  <q-page>
    <q-carousel
      v-model="slide"
      arrows
      animated
      infinite
      swipeable
      class="bg-primary text-white"
      height="400px"
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        :img-src="image.src"
        :caption="image.caption"
        :img-alt="image.alt"
      />
    </q-carousel>
    <h2>Berikut kucing yang tersedia :</h2>
    <div class="q-pa-md">
      <q-card v-for="cat in cats" :key="cat.id" class="my-card q-mb-md">
        <q-img :src="cat.image" :alt="cat.name" />
        <q-card-section>
          <div class="text-h6">{{ cat.name }}</div>
          <div class="text-subtitle2">{{ cat.breed }}</div>
        </q-card-section>
        <q-card-section>{{ cat.description }}</q-card-section>
        <q-card-actions>
          <q-btn flat label="Buy Now" color="primary" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      images: [
        {
          src: 'https://tse4.mm.bing.net/th?id=OIP.8DyaKZGuntG_TKmNRgl8egHaHX&pid=Api&P=0&h=220',
          caption: 'Beautiful Cat 1',
          alt: 'Cat 1'
        },
        {
          src: 'http://2.bp.blogspot.com/-_4XsKSWULzo/UIZGhNiRgtI/AAAAAAAACZA/VV5fIy-d7_o/s1600/gambar+kucing+lucu+3.jpg',
          caption: 'Beautiful Cat 2',
          alt: 'Cat 2'
        },
        {
          src: 'https://4.bp.blogspot.com/-aHCUEP_nzKI/T_2YMMPs1II/AAAAAAAAAXk/Gvroc9IGZgg/s1600/Kucing.jpg',
          caption: 'Beautiful Cat 3',
          alt: 'Cat 3'
        }
      ],
      cats: [
        {
          id: 1,
          name: 'Whiskers',
          breed: 'Siamese',
          description: 'A playful Siamese cat.',
          image: 'http://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/06/09/1587625639.jpg'
        },
        {
          id: 2,
          name: 'Mittens',
          breed: 'Persian',
          description: 'A calm Persian cat.',
          image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/65647_kucing-lucu.jpg'
        },
        {
          id: 3,
          name: 'Shadow',
          breed: 'Maine Coon',
          description: 'A friendly Maine Coon cat.',
          image: 'http://1.bp.blogspot.com/-FHGDyfBNgX0/UOviSlrOzYI/AAAAAAAADjY/xD4UWSCrJ5U/s1600/foto-kucing-lucu_01.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 300px;
  margin: 0 auto;
}
</style>
