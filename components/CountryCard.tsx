
export default function CountryCard({ country }: any) {
  return (
    <div className="border border-gray-200 shadow p-4 flex gap-4 items-center rounded-md">
      <img
        src={country.flags.png}
        alt={country.name}
        width={80}
        height={60}
      />

      <div>
        <h3 className="font-semibold">
          {country.name}
        </h3>

        <p className="text-gray-500">
          {country.region}
        </p>
      </div>
    </div>
  );
}