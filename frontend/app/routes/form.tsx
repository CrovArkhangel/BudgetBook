import { useState } from "react";
import SearchForm from "~/features/ecsite/list";
import type { Product } from "./types";

export default function Form() {
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
      const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    query: string,
  ) => {
    e.preventDefault();
    console.log(query)
    setQuery(query);
    setPage(1);
  };
    return (
        <>
        {query}
<SearchForm onSubmit={handleSubmit}/></>
    )
}