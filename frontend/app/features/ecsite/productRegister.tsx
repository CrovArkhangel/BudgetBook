//import { useForm } from 'react-hook-form';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { useState } from 'react';

type Pc = {
  pcId: number;
  name: string;
  imageUrl: string;
  price: number;
  memory: number;
  storage: number;
  deviceSize: number;
  deviceType: number;
  os: string;
  cpu: string;
  gpu: string;
  purpose: string;
};

export default function ProductRegisterForm() {
//   const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<Pc>();
  const [formData, setFormData] = useState<Pc>({
    pcId: 0,
    name: '',
    imageUrl: '',
    price: 0,
    memory: 0,
    storage: 0,
    deviceSize: 0,
    deviceType: 0,
    os: '',
    cpu: '',
    gpu: '',
    purpose: '',
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'memory' || name === 'storage' || name === 'deviceSize' || name === 'deviceType'
        ? Number(value)
        : value,
    }));
  };

  const handleDeviceTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      deviceType: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('送信データ:', formData);
    // ここでAPIにPOSTする処理を書く
  };

//   const onSubmit = (data: Pc) => {
//     console.log('登録データ:', data);
//     // ここでAPIにPOSTする処理を書く
//     reset();
//   };

  return (
    // <Card className="max-w-xl mx-auto mt-10 p-6">
    //   <CardContent>
    //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    //       <div>
    //         <Label>PC名</Label>
    //         <Input {...register('name', { required: true })} />
    //         {errors.name && <p className="text-red-500 text-sm">名前は必須です</p>}
    //       </div>

    //       <div>
    //         <Label>画像URL</Label>
    //         <Input {...register('imageUrl')} />
    //       </div>

    //       <div>
    //         <Label>価格（円）</Label>
    //         <Input type="number" {...register('price', { valueAsNumber: true })} />
    //       </div>

    //       <div>
    //         <Label>メモリ（GB）</Label>
    //         <Input type="number" {...register('memory', { valueAsNumber: true })} />
    //       </div>

    //       <div>
    //         <Label>ストレージ（GB）</Label>
    //         <Input type="number" {...register('storage', { valueAsNumber: true })} />
    //       </div>

    //       <div>
    //         <Label>デバイスサイズ（インチ）</Label>
    //         <Input type="number" step="0.1" {...register('deviceSize', { valueAsNumber: true })} />
    //       </div>

    //       <div>
    //         <Label>デバイスタイプ</Label>
    //         <Select onValueChange={(val) => setValue('deviceType', Number(val))}>
    //           <SelectTrigger>
    //             <SelectValue placeholder="選択してください" />
    //           </SelectTrigger>
    //           <SelectContent>
    //             <SelectItem value="0">ノートPC</SelectItem>
    //             <SelectItem value="1">デスクトップ</SelectItem>
    //           </SelectContent>
    //         </Select>
    //         {errors.deviceType && <p className="text-red-500 text-sm">タイプを選択してください</p>}
    //       </div>

    //       <div>
    //         <Label>OS</Label>
    //         <Input {...register('os')} />
    //       </div>

    //       <div>
    //         <Label>CPU</Label>
    //         <Input {...register('cpu')} />
    //       </div>

    //       <div>
    //         <Label>GPU</Label>
    //         <Input {...register('gpu')} />
    //       </div>

    //       <div>
    //         <Label>用途</Label>
    //         <Textarea {...register('purpose')} />
    //       </div>

    //       <Button type="submit" className="w-full">
    //         登録する
    //       </Button>
    //     </form>
    //   </CardContent>
    // </Card>
    <Card className="max-w-2xl mx-auto mt-16 p-8 rounded-xl shadow-lg border border-gray-200 bg-white">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">PC 商品登録フォーム</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PC名 */}
          <div>
            <Label htmlFor="name" className="mb-2 block font-medium text-gray-700">
              PC名 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="例: MacBook Pro 16"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          {/* 画像URL */}
          <div>
            <Label htmlFor="imageUrl" className="mb-2 block font-medium text-gray-700">
              画像URL
            </Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="画像のURLを入力"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* 価格 */}
          <div>
            <Label htmlFor="price" className="mb-2 block font-medium text-gray-700">
              価格（円）
            </Label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="例: 150000"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min={0}
            />
          </div>

          {/* メモリ */}
          <div>
            <Label htmlFor="memory" className="mb-2 block font-medium text-gray-700">
              メモリ（GB）
            </Label>
            <Input
              type="number"
              id="memory"
              name="memory"
              value={formData.memory}
              onChange={handleChange}
              placeholder="例: 16"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min={0}
            />
          </div>

          {/* ストレージ */}
          <div>
            <Label htmlFor="storage" className="mb-2 block font-medium text-gray-700">
              ストレージ（GB）
            </Label>
            <Input
              type="number"
              id="storage"
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              placeholder="例: 512"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min={0}
            />
          </div>

          {/* デバイスサイズ */}
          <div>
            <Label htmlFor="deviceSize" className="mb-2 block font-medium text-gray-700">
              デバイスサイズ（インチ）
            </Label>
            <Input
              type="number"
              step="0.1"
              id="deviceSize"
              name="deviceSize"
              value={formData.deviceSize}
              onChange={handleChange}
              placeholder="例: 15.6"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min={0}
            />
          </div>

          {/* デバイスタイプ */}
          <div>
            <Label htmlFor="deviceType" className="mb-2 block font-medium text-gray-700">
              デバイスタイプ
            </Label>
            <Select
              onValueChange={handleDeviceTypeChange}
              defaultValue={formData.deviceType.toString()}
              id="deviceType"
              name="deviceType"
              className="rounded-md border border-gray-300 shadow-sm"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">ノートPC</SelectItem>
                <SelectItem value="1">デスクトップ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* OS */}
          <div>
            <Label htmlFor="os" className="mb-2 block font-medium text-gray-700">
              OS
            </Label>
            <Input
              id="os"
              name="os"
              value={formData.os}
              onChange={handleChange}
              placeholder="例: Windows 11"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* CPU */}
          <div>
            <Label htmlFor="cpu" className="mb-2 block font-medium text-gray-700">
              CPU
            </Label>
            <Input
              id="cpu"
              name="cpu"
              value={formData.cpu}
              onChange={handleChange}
              placeholder="例: Intel Core i7"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* GPU */}
          <div>
            <Label htmlFor="gpu" className="mb-2 block font-medium text-gray-700">
              GPU
            </Label>
            <Input
              id="gpu"
              name="gpu"
              value={formData.gpu}
              onChange={handleChange}
              placeholder="例: NVIDIA RTX 3060"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* 用途 */}
          <div>
            <Label htmlFor="purpose" className="mb-2 block font-medium text-gray-700">
              用途
            </Label>
            <Textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="例: ゲーミング、動画編集など"
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-md transition-colors"
          >
            登録する
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
