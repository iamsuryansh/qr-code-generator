import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [input, setInput] = useState("");
    const [qrCode, setQrCode] = useState("");
    const [showQRCode, setShowQRCode] = useState(false);

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput("");
        setShowQRCode(true);
    }

    return (
        <div className="flex bg-gray-950 flex-col items-center h-screen transition-all">
            <div className="text-white font-bold text-5xl mt-20 mb-10">
                QR Code Generator
            </div>
            <div className="flex flex-col justify-between w-1/3 mt-10">
                <input
                    className="h-12 p-2 rounded-md mb-5"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Paste your link here..."
                />
                <button
                    className="h-14 font-semibold w-full p-2 mb-20 text-2xl rounded-md bg-blue-400 hover:bg-blue-700 text-white"
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div className={`translate-opacity duration-500 delay-250 ${showQRCode ? "opacity-1" : "opacity-0 "}`}>
                <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
            </div>
            <div className="text-center w-2/5 text-white py-10 text-2xl">
                QR Code generated for - {qrCode}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
