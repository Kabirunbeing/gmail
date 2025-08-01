import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import {
  Document,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  Packer,
} from 'docx';
import { saveAs } from 'file-saver';

const ConvertToExcel = () => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [format, setFormat] = useState('excel'); // 'excel' or 'docx'

  const placeholderText = `Just paste your list — any format!
Like:
john@gmail.com:Password123
mary@yahoo.com | SecPass | +1234567890
sarah@outlook.com Pass456 recovery@old.com
or even:
Email: alex@gmail.com
Pass: MySecret123
---
lisa@gmail.com +987654321`;

  // Extract emails using regex
  const extractEmails = (text) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex) || [];
  };

  const handleExcelExport = () => {
    setError('');
    setIsProcessing(true);
    setFormat('excel');

    try {
      const emails = extractEmails(input);
      if (emails.length === 0) {
        throw new Error('No valid email addresses found in the input.');
      }

      // Create rows: all other fields marked for manual fill
      const rows = emails.map((email) => ({
        'Email': email,
        'Password': '[Enter Password]',
        'Recovery Email/Phone': '[Enter Recovery]',
        'Notes': '',
      }));

      const ws = XLSX.utils.json_to_sheet(rows);
      ws['!cols'] = [
        { wch: 30 },
        { wch: 25 },
        { wch: 30 },
        { wch: 30 },
      ];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Gmail Accounts');
      XLSX.writeFile(wb, `gmail-accounts-${emails.length}.xlsx`);

      setIsProcessing(false);
    } catch (err) {
      setError(err.message);
      setIsProcessing(false);
    }
  };

  const handleDocxExport = () => {
    setError('');
    setIsProcessing(true);
    setFormat('docx');

    try {
      const emails = extractEmails(input);
      if (emails.length === 0) {
        throw new Error('No valid email addresses found in the input.');
      }

      const tableRows = [
        // Header
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({ text: 'Email', bold: true })],
              width: { size: 30, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
              children: [new Paragraph({ text: 'Password', bold: true })],
              width: { size: 25, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
              children: [new Paragraph({ text: 'Recovery', bold: true })],
              width: { size: 30, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
              children: [new Paragraph({ text: 'Notes', bold: true })],
              width: { size: 15, type: WidthType.PERCENTAGE },
            }),
          ],
          tableHeader: true,
        }),
        // Data Rows
        ...emails.map(
          (email) =>
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph(email)] }),
                new TableCell({ children: [new Paragraph('[Enter Password]')] }),
                new TableCell({ children: [new Paragraph('[Enter Recovery]')] }),
                new TableCell({ children: [new Paragraph('')] }),
              ],
            })
        ),
      ];

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                text: 'Gmail Accounts Template',
                heading: 'Heading1',
                alignment: 'center',
              }),
              new Paragraph({
                text: `Found ${emails.length} email(s). Please fill in missing details.`,
                italics: true,
                alignment: 'center',
                spacing: { after: 200 },
              }),
              new Table({
                rows: tableRows,
                width: { size: 100, type: WidthType.PERCENTAGE },
              }),
              new Paragraph({
                text: '\nGenerated on: ' + new Date().toLocaleString(),
                italics: true,
                size: 10,
              }),
            ],
          },
        ],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, `gmail-accounts-${emails.length}.docx`);
        setIsProcessing(false);
      });
    } catch (err) {
      setError(err.message);
      setIsProcessing(false);
    }
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent">
          Extract & Organize Gmail Accounts
        </h2>
        <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto">
          Paste your list in <strong className="text-white">any format</strong> — we’ll extract the emails and generate a clean{' '}
          <strong className="text-cyan-400">Excel or Word template</strong> for you to complete.
        </p>

        {/* Instructions */}
        <div className="text-left max-w-3xl mx-auto mb-6 text-sm text-gray-400 bg-black/40 p-4 rounded-xl border border-gray-700">
          <strong>No format required!</strong> Just include the emails. We support:
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><code className="text-cyan-400">email:password</code></li>
            <li><code className="text-cyan-400">email|pass|recovery</code></li>
            <li>Plain text with emails mixed in</li>
            <li>Multiple lines, any separator</li>
          </ul>
          <em className="text-gray-500 block mt-2">We only extract valid emails — you fill the rest.</em>
        </div>

        {/* Textarea Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholderText}
          rows="8"
          className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm leading-relaxed"
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mt-4 text-left max-w-3xl mx-auto">
            ❌ {error}
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleExcelExport}
            disabled={isProcessing}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-emerald-500 disabled:opacity-60 transition-all transform hover:scale-105"
          >
            {isProcessing && format === 'excel'
              ? 'Extracting...'
              : `📥 Create Excel (${extractEmails(input).length} emails)`}
          </button>

          <button
            onClick={handleDocxExport}
            disabled={isProcessing}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 transition-all transform hover:scale-105"
          >
            {isProcessing && format === 'docx'
              ? 'Extracting...'
              : `📘 Create DOCX (${extractEmails(input).length} emails)`}
          </button>

          <button
            onClick={() => setInput('')}
            className="px-8 py-3 bg-gray-700 text-gray-200 font-medium rounded-lg hover:bg-gray-600 transition"
          >
            Clear All
          </button>
        </div>

        {/* Final Tip */}
        <p className="mt-10 text-gray-500 text-sm">
          Perfect for messy lists. <strong className="text-white">We extract emails — you complete the rest.</strong>
        </p>
      </div>
    </section>
  );
};

export default ConvertToExcel;