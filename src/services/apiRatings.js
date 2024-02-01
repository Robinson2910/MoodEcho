import supabase from "./supabase";

export async function addRatings(review) {
  const { data, error } = await supabase
    .from("ratings")
    .insert([review])
    .select();
  if (error) {
    console.error(error.message);
  }
}

export async function avgRatings(id) {
  let { data: ratings, error } = await supabase
    .from("ratings")
    .select("rating")
    .eq("therapistId", id);

  if (error) {
    console.error(error.message);
  }
  const sumOfRatings = ratings.reduce(
    (sum, ratingObj) => sum + ratingObj.rating,
    0
  );

  // Calculate the average rating
  const averageRating =
    sumOfRatings / ratings.length;
  return {
    averageRating,
    length: ratings.length,
  };
}
