import { useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import IgntModal from "./for_react_lib/IgntModal";

interface IgntCrudUpdateProps {
  className?: string;
  storeName: string;
  itemName: string;
  itemData: any;
  commandName: string;
  close: () => void;
}
export default function IgntCrudUpdate(props: IgntCrudUpdateProps) {
  const [formData, setFormData] = useState<any>(props.itemData);
  const { address } = useAddressContext();
  const client = useClient();
  // computed
  const itemFields = (
    client[
      props.storeName as keyof Omit<
        typeof client,
        "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
      >
    ] as any
  ).structure[props.itemName];

  const itemFieldsFiltered = useMemo(
    () => itemFields.fields.filter((f: any) => f.name !== "id" && f.name !== "creator") as any[],
    [props.itemName],
  );
  const creator = address;

  const editItem = async () => {
    await (
      client[
        props.storeName as keyof Omit<
          typeof client,
          "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
        >
      ] as any
    ).tx[props.commandName]({
      value: { ...formData, creator, id: props.itemData.id },
    });
    props.close();
  };
  return (
    <IgntModal
      visible={true}
      title={`Edit ${props.itemName}`}
      closeIcon={true}
      submitButton={true}
      cancelButton={true}
      className="text-center"
      close={() => props.close()}
      submit={editItem}
      body={
        <>
          <div className="my-4" />
          {itemFieldsFiltered.map((field) => (
            <div key={"update_field_" + field.name}>
              <label htmlFor={`p${field.name}`} className="sp-label capitalize-first-letter">
                {field.name}
              </label>
              <input
                id={`p${field.name}`}
                value={formData[field.name]}
                placeholder={`Enter ${field.name}`}
                type="text"
                name={`p${field.name}`}
                className="sp-input"
                onChange={(evt) => {
                  setFormData((oldForm: any) => ({ ...oldForm, [field.name]: evt.target.value }));
                }}
              />
              <div className="my-4" />
            </div>
          ))}
        </>
      }
    />
  );
}