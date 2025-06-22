import { useEffect, useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import ProductList from "./components/ProductList";
import type { FilterTerm, Product } from "./types";
import { axiosInstance } from "../../lib/axiosInstance";
import LoadingOverlay from "./components/LoadingOverlay";

export default function ProductListPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [pcs, setPcs] = useState<Product[]>([]);
  const [allPcs, setAllPcs] = useState<Product[]>([]);
  const [techBooks, setTechBooks] = useState<Product[]>([]);
  const [allTechBooks, setAllTechBooks] = useState<Product[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("pcs");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const PAGE_SIZE = 12;

  const selectedOption = (option: string) => {
    console.log(option);
  };

  const filterTerms: FilterTerm[] = [
    {
      id: 1,
      label: "OS",
      options: ["Mac", "Windows"],
    },
    {
      id: 2,
      label: "種類",
      options: ["ノートPC", "デスクトップPC"],
    },
    {
      id: 3,
      label: "用途",
      options: ["個人開発", "大規模開発"],
    },
    {
      id: 4,
      label: "予算",
      options: ["0", "100"],
    },
    {
      id: 5,
      label: "ディスプレイサイズ(インチ)",
      options: ["27以上", "23~26", "20~22", "17~19", "15~16", "14以下"],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const productListResponse = await axiosInstance.get(`/${selectedTab}`, {
          params: {
            page: page,
            size: PAGE_SIZE,
            keyword: query,
          },
        });
        setTotalPages(productListResponse.data?.totalPages - 1 || 1);
        const allProductListResponse = await axiosInstance.get(`/${selectedTab}`, {
          params: {
            page: page,
            size: PAGE_SIZE * totalPages,
          },
        });
        if (selectedTab === "pcs") {
          setPcs(productListResponse.data?.content);
          setAllPcs(allProductListResponse.data?.content);
        } else {
          setTechBooks(productListResponse.data?.content);
          setAllTechBooks(allProductListResponse.data?.content);
        }
        
        const osListResponse = await axiosInstance.get(`/oss`);
        const cpuListResponse = await axiosInstance.get(`/cpus`);
        const gpuListResponse = await axiosInstance.get(`/gpus`);
        const purposeListResponse = await axiosInstance.get(`/purpose`);
        const deviceTypeListResponse = await axiosInstance.get(`/deviceType`);
    
        const deviceSizeListResponse = await axiosInstance.get(`/purpose`);
      } catch (error) {
        console.error("APIリクエストに失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedTab, page, query]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    query: string,
  ) => {
    e.preventDefault();
    setQuery(query);
    setPage(1);
  };

  return (
    <div className="p-4 h-80vh">
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <Tabs
          value={selectedTab}
          onValueChange={(value) => {
            setSelectedTab(value);
          }}
          className="mb-4"
        >
          <TabsList>
            <TabsTrigger value="pcs">PC</TabsTrigger>
            <TabsTrigger value="books">技術書</TabsTrigger>
          </TabsList>
          <TabsContent value="pcs">
            <ProductList
              products={pcs}
              allProducts={allPcs}
              filterTerms={filterTerms}
              selectedOption={selectedOption}
              handleSubmit={handleSubmit}
              currentPage={page}
              onPageChange={setPage}
              totalPages={totalPages}
            />
          </TabsContent>
          <TabsContent value="books">
            <ProductList
              products={techBooks}
              allProducts={allTechBooks}
              filterTerms={filterTerms}
              selectedOption={selectedOption}
              handleSubmit={handleSubmit}
              currentPage={page}
              onPageChange={setPage}
              totalPages={totalPages}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}