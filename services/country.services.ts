export async function getCountries(limit?:number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/countries?fields=name,flags,region&limit=${limit}&offset=0`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}