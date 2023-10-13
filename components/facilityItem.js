import { getColumnIndexMap } from "@/models/facility";

export default function FacilityItem({ className, item }) {
  console.log("FacilityItem: ", className, item);

  const key = Object.keys(item).at(0).toUpperCase();
  const value = Object.values(item).at(0);

  const columnIndexMap = getColumnIndexMap();

  return (
    <div className={`mb-4 border-b ${className}`}>
      <h3>
        <em className="text-center block underline">{key}</em>
        <span>{!!value ? value.at(columnIndexMap.Applicant) : "[SKIP]"}</span>
      </h3>

      {!!value ? (
        <p title={value.at(columnIndexMap.LocationDescription)}>
          {value.at(columnIndexMap.Address)}
        </p>
      ) : (
        <p>No food truck applicant is named with initial {key}.</p>
      )}
    </div>
  );
}
