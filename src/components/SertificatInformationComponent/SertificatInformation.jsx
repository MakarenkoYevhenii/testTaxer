import { useState } from "react";
import asn1Parser from "../../share/helpers/ASN1/ASN1";
function SertificatInformation() {
    const [sert,SetSert]=useState("")
    function readFile(input) {
        let file = input.files[0];
      
        let reader = new FileReader();
      
        reader.readAsText(file);
      
        reader.onload = function() {
          SetSert(reader.result);

          let result = asn1Parser(reader.result, file.name);
          console.log(result);
        };
      
        reader.onerror = function() {
          console.log(reader.error);
        };}
  return (
    <div className="SertificatInformation">
      <input type="file" onChange={(e) => {readFile(e.target);}} />
    </div>
  );
}

export default SertificatInformation;
