import { db } from "./db";

export async function getWishlists() {
  return await db.wishlist
    .orderBy("createdAt")
    .reverse()
    .toArray();
}

export async function addWishlist(item) {
  return await db.wishlist.add({
    ...item,
    achieved: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export async function updateWishlist(id, item) {
  return await db.wishlist.update(id, {
    ...item,
    updatedAt: new Date().toISOString(),
  });
}

export async function toggleAchieved(id, currentStatus) {
  return await db.wishlist.update(id, {
    achieved: !currentStatus,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteWishlist(id) {
  return await db.wishlist.delete(id);
}
