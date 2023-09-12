import { FileVideo, Github, Upload } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Slider } from "@radix-ui/react-slider";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ia</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-400">
            Desenvolvido com ❤ na NLW.IA
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 gap-6 flex p-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Inclua o prompt para I.A..."
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela I.A"
              readOnly
            />
          </div>

          <p className="text-zinc-500 text-sm">
            Lembre:se você pode ultilizar a varaiavel{" "}
            <code className="text-violet-700">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>

        <aside className="w-80 space-y-6">
          {/* Foms */}
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm gap-2 flex-col items-center justify-center text-zinc-400 hover:bg-zinc-100/10"
            >
              <FileVideo className="h4 w-4" />
              Selecione um vídeo
            </label>
            <input
              type="file"
              name="video"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-1">
              <Label className="" htmlFor="transcription-prompt">
                Prompt de Transcrição
              </Label>
              <Textarea
                id="transcription-prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no vídeo seprados por virgula [,]"
              ></Textarea>
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <p className="block text-xs text-zinc-400 italic">
                Você poderá customizar essa opção em breve
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} defaultValue={[0.5]} />
              <p className="block text-xs text-zinc-400 italic">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possiveis erros.
              </p>
            </div>

            <Separator />
          </form>
        </aside>
      </div>
    </div>
  );
}

export default App;
