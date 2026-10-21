const CSV_URL = "https://docs.google.com/spreadsheets/d/1IGkI1foAYcKUYWSF2jknjaqhrDwXHAuJJ_984qGwSJQ/export?format=csv&gid=1142490697";

// Logotipo Hemobrás em base64 para uso no cabeçalho dos relatórios PDF
const LOGO_HEMOBRAS_BASE64 = "data:image/jpeg;base64,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";

// ADICIONADA A COLUNA "Data/hora de Emissão" (Índice 1)
const COLUNAS_DESEJADAS = [
    "Status", "Data/hora de Emissão", "Número da OSMC", "Solicitante", "Bloco", "Piso",
    "Equipamento", "Sala", "Descrição do Problema", "Observação", "Motivo", "Data/hora de fechamento"
];

let allData = [];
let filteredData = [];
const rowsPerPage = 50; 
let currentPage = 1;

let osmcChartInstance = null; 
let blocoChartInstance = null;

let isTableVisible = false;

const searchInput = document.getElementById('searchInput');
const filterStatus = document.getElementById('filterStatus');
const filterSolicitante = document.getElementById('filterSolicitante');
const filterBloco = document.getElementById('filterBloco');
const filterMotivo = document.getElementById('filterMotivo');
const filterDateFrom = document.getElementById('filterDateFrom');
const filterDateUntil = document.getElementById('filterDateUntil');
const btnGenerateReport = document.getElementById('btnGenerateReport');
const btnRefresh = document.getElementById('btnRefresh');

const loadingState = document.getElementById('loadingState');
const dashboardSummary = document.getElementById('dashboardSummary'); 
const kpiCardsContainer = document.getElementById('kpiCardsContainer'); 
const chartsGrid = document.getElementById('chartsGrid');
const tableToggleContainer = document.getElementById('tableToggleContainer');
const btnToggleTable = document.getElementById('btnToggleTable');
const tableSection = document.getElementById('tableSection');

const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
const currentPageIndicator = document.getElementById('currentPageIndicator');
const pageInfo = document.getElementById('pageInfo');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const jumpInput = document.getElementById('jumpInput');
const btnJump = document.getElementById('btnJump');

function init() {
    Chart.register(ChartDataLabels);
    fetchData();
    setInterval(() => { fetchData(true); }, 10800000); 
}

btnRefresh.addEventListener('click', () => { fetchData(false); });

btnGenerateReport.addEventListener('click', gerarRelatorioSolicitante);

btnToggleTable.addEventListener('click', () => {
    isTableVisible = !isTableVisible;
    if(isTableVisible) {
        tableSection.style.display = 'block';
        btnToggleTable.textContent = 'Ocultar Lista de O.S. (Detalhamento)';
        btnToggleTable.style.backgroundColor = '#444'; 
    } else {
        tableSection.style.display = 'none';
        btnToggleTable.textContent = 'Visualizar Lista de O.S. (Detalhamento)';
        btnToggleTable.style.backgroundColor = 'var(--primary-color)'; 
    }
});

function fetchData(isSilentUpdate = false) {
    if (!isSilentUpdate) {
        loadingState.style.display = 'block';
        dashboardSummary.style.display = 'none'; 
        chartsGrid.style.display = 'none';
        tableToggleContainer.style.display = 'none';
        if(isTableVisible) tableSection.style.display = 'none';
    }

    Papa.parse(CSV_URL, {
        download: true,
        header: false,
        skipEmptyLines: true,
        complete: function(results) {
            const rawData = results.data;
            let headerIndex = -1;

            for (let i = 0; i < rawData.length; i++) {
                if (rawData[i].includes("Número da OSMC")) {
                    headerIndex = i;
                    break;
                }
            }

            if (headerIndex === -1) {
                if (!isSilentUpdate) loadingState.innerHTML = '<span style="color:red">Erro: Cabeçalho não encontrado.</span>';
                return;
            }

            const headerRow = rawData[headerIndex];
            
            let colIndices = COLUNAS_DESEJADAS.map(colName => {
                let index = headerRow.findIndex(h => h && h.trim().toLowerCase() === colName.toLowerCase());
                if (index === -1) index = headerRow.findIndex(h => h && h.toLowerCase().includes(colName.toLowerCase()));
                if (index === -1 && colName === "Status") {
                    index = headerRow.findIndex(h => h && (h.toLowerCase().includes("pendente") || h.toLowerCase().includes("situação") || h.toLowerCase().includes("status")));
                }
                return index;
            });

            const statusIdx = colIndices[0]; 
            // O Índice da OSMC agora precisa ser procurado dinamicamente para não falhar a validação do ano
            const osmcIdx = colIndices[2];   
            
            allData = [];

            for (let j = headerIndex + 1; j < rawData.length; j++) {
                let row = rawData[j];
                if (!row || row.length === 0 || osmcIdx === -1) continue;

                let osmcVal = row[osmcIdx] ? row[osmcIdx].toString().trim() : "";
                let statusVal = (statusIdx !== -1 && row[statusIdx]) ? row[statusIdx].toString().trim() : "";
                let statusValido = statusVal !== "" && statusVal !== "-"; 
                
                let anoValido = false;
                if (osmcVal.includes("2025") || osmcVal.includes("2026") || osmcVal.includes("2027")) {
                    anoValido = true;
                }

                if (osmcVal && osmcVal.includes("/") && osmcVal.toLowerCase() !== "número da osmc" && anoValido && statusValido) {
                    const newRow = colIndices.map(cIdx => {
                        return (cIdx !== -1 && row[cIdx]) ? row[cIdx].toString().trim() : "-";
                    });
                    allData.push(newRow);
                }
            }

            allData.reverse();

            popularFiltrosDinamicos();
            aplicarFiltrosGerais();
            renderTableHeaders();
            
            loadingState.style.display = 'none';
            dashboardSummary.style.display = 'flex'; 
            chartsGrid.style.display = 'grid';
            tableToggleContainer.style.display = 'block';
            if(isTableVisible) tableSection.style.display = 'block';
        }
    });
}

function popularFiltrosDinamicos() {
    const statusSet = new Set();
    const motivoSet = new Set();

    allData.forEach(row => {
        // Índices remapeados devido à nova coluna Data/hora de Emissão
        let cleanStatus = row[0] !== "-" ? row[0].replace(/⚠️|✅|⏸️|❌|⚙️|🛑/g, '').trim() : "-";
        
        if (cleanStatus !== "-") statusSet.add(cleanStatus); 
        if (row[10] !== "-") motivoSet.add(row[10]); // Motivo agora é 10
    });

    preencherSelect(filterStatus, statusSet);
    preencherSelect(filterMotivo, motivoSet);
    atualizarFiltrosBlocoESolicitantePorData();
}

function preencherSelect(selectElement, valores) {
    const valoresAtuais = obterValoresSelecionados(selectElement);
    const valoresUnicos = Array.from(new Set(valores)).sort();
    selectElement.innerHTML = selectElement.multiple ? '' : `<option value="">${selectElement.options[0].text}</option>`;

    valoresUnicos.forEach(valor => {
        const option = document.createElement('option');
        option.value = valor;
        option.textContent = valor;
        option.selected = valoresAtuais.includes(valor);
        selectElement.appendChild(option);
    });

    if (!selectElement.multiple && valoresUnicos.includes(valoresAtuais[0])) {
        selectElement.value = valoresAtuais[0];
    }

    if (selectElement.multiple) renderFiltroMultiplo(selectElement);
}

function obterValoresSelecionados(selectElement) {
    return Array.from(selectElement.selectedOptions)
        .map(option => option.value)
        .filter(Boolean);
}

function renderFiltroMultiplo(selectElement) {
    const wrapperId = selectElement.id === 'filterSolicitante' ? 'solicitanteFilterDropdown' : 'blocoFilterDropdown';
    const wrapper = document.getElementById(wrapperId);
    const trigger = wrapper.querySelector('.multi-select-trigger');
    const optionsContainer = wrapper.querySelector('.multi-select-options');
    const selectedValues = obterValoresSelecionados(selectElement);
    const placeholder = selectElement.id === 'filterSolicitante' ? 'Todos os Solicitantes' : 'Todos os Blocos';
    const triggerLabel = selectedValues.length === 0
        ? placeholder
        : selectedValues.length === 1
            ? selectedValues[0]
            : `${selectedValues.length} selecionados`;

    trigger.querySelector('span').textContent = triggerLabel;
    trigger.title = selectedValues.join(', ') || placeholder;
    optionsContainer.replaceChildren();

    Array.from(selectElement.options).forEach(option => {
        const label = document.createElement('label');
        label.className = 'multi-select-option';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = option.value;
        checkbox.checked = option.selected;
        checkbox.addEventListener('change', () => {
            option.selected = checkbox.checked;
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        });
        label.append(checkbox, document.createTextNode(option.textContent));
        optionsContainer.appendChild(label);
    });
}

function configurarFiltroMultiplo(selectElement) {
    const wrapperId = selectElement.id === 'filterSolicitante' ? 'solicitanteFilterDropdown' : 'blocoFilterDropdown';
    const wrapper = document.getElementById(wrapperId);
    const trigger = wrapper.querySelector('.multi-select-trigger');
    const menu = wrapper.querySelector('.multi-select-menu');

    trigger.addEventListener('click', () => {
        const abrir = menu.hidden;
        document.querySelectorAll('.multi-select-menu').forEach(otherMenu => {
            otherMenu.hidden = true;
            otherMenu.previousElementSibling.setAttribute('aria-expanded', 'false');
            otherMenu.parentElement.classList.remove('is-open');
        });
        menu.hidden = !abrir;
        trigger.setAttribute('aria-expanded', String(abrir));
        wrapper.classList.toggle('is-open', abrir);
    });

    wrapper.querySelector('[data-action="select-all"]').addEventListener('click', () => {
        Array.from(selectElement.options).forEach(option => {
            option.selected = true;
        });
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    });

    wrapper.querySelector('[data-action="clear"]').addEventListener('click', () => {
        Array.from(selectElement.options).forEach(option => {
            option.selected = false;
        });
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    });

    selectElement.addEventListener('change', () => renderFiltroMultiplo(selectElement));
}

document.addEventListener('click', event => {
    if (event.target.closest('.multi-select-filter')) return;
    document.querySelectorAll('.multi-select-menu').forEach(menu => {
        menu.hidden = true;
        menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        menu.parentElement.classList.remove('is-open');
    });
});

document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.multi-select-menu').forEach(menu => {
        menu.hidden = true;
        menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        menu.parentElement.classList.remove('is-open');
    });
});

function obterRegistrosNoPeriodo() {
    const dataDeDigitada = filterDateFrom.value.trim();
    const dataAteDigitada = filterDateUntil.value.trim();
    const dataDeFiltro = converterDataFiltroParaIso(dataDeDigitada);
    const dataAteFiltro = converterDataFiltroParaIso(dataAteDigitada);
    const datasValidas = (!dataDeDigitada || dataDeFiltro) && (!dataAteDigitada || dataAteFiltro);

    if (!datasValidas) return allData;

    return allData.filter(row => {
        const dataEmissao = dataDeFiltro || dataAteFiltro ? obterDataEmissao(row) : '';
        const passouDataDe = !dataDeDigitada || (dataEmissao && dataEmissao >= dataDeFiltro);
        const passouDataAte = !dataAteDigitada || (dataEmissao && dataEmissao <= dataAteFiltro);
        return passouDataDe && passouDataAte;
    });
}

function atualizarFiltrosBlocoESolicitantePorData() {
    const registrosNoPeriodo = obterRegistrosNoPeriodo();
    const blocosDisponiveis = registrosNoPeriodo
        .map(row => row[4])
        .filter(bloco => bloco !== '-');

    preencherSelect(filterBloco, blocosDisponiveis);

    const solicitantesDisponiveis = registrosNoPeriodo
        .filter(row => row[3] !== '-')
        .map(row => row[3]);
    preencherSelect(filterSolicitante, solicitantesDisponiveis);
}

function obterDataEmissao(row) {
    const data = row[1] ? row[1].toString().trim() : '';
    const isoMatch = data.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    const brMatch = data.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    const match = isoMatch || brMatch;

    if (!match) return '';

    const ano = Number(isoMatch ? match[1] : match[3]);
    const mes = Number(match[2]);
    const dia = Number(isoMatch ? match[3] : match[1]);
    const dataValidada = new Date(Date.UTC(ano, mes - 1, dia));

    if (dataValidada.getUTCFullYear() !== ano ||
        dataValidada.getUTCMonth() !== mes - 1 ||
        dataValidada.getUTCDate() !== dia) {
        return '';
    }

    return `${ano.toString().padStart(4, '0')}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
}

function converterDataFiltroParaIso(data) {
    const match = data.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return '';

    const dia = Number(match[1]);
    const mes = Number(match[2]);
    const ano = Number(match[3]);
    const dataValidada = new Date(Date.UTC(ano, mes - 1, dia));

    if (dataValidada.getUTCFullYear() !== ano ||
        dataValidada.getUTCMonth() !== mes - 1 ||
        dataValidada.getUTCDate() !== dia) {
        return '';
    }

    return `${ano.toString().padStart(4, '0')}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
}

function aplicarFiltrosGerais() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusFiltro = filterStatus.value;
    const solicitantesFiltro = obterValoresSelecionados(filterSolicitante);
    const blocosFiltro = obterValoresSelecionados(filterBloco);
    const motivoFiltro = filterMotivo.value;
    const dataDeDigitada = filterDateFrom.value.trim();
    const dataAteDigitada = filterDateUntil.value.trim();
    const dataDeFiltro = converterDataFiltroParaIso(dataDeDigitada);
    const dataAteFiltro = converterDataFiltroParaIso(dataAteDigitada);
    const datasValidas = (!dataDeDigitada || dataDeFiltro) && (!dataAteDigitada || dataAteFiltro);

    filteredData = allData.filter(row => {
        // Pesquisa: OSMC (2), Bloco (4), Equipamento (6), Descrição do Problema (8)
        const passouPesquisa = !searchTerm || 
            (row[2] && row[2].toString().toLowerCase().includes(searchTerm)) || 
            (row[4] && row[4].toString().toLowerCase().includes(searchTerm)) ||
            (row[6] && row[6].toString().toLowerCase().includes(searchTerm)) ||
            (row[8] && row[8].toString().toLowerCase().includes(searchTerm));
            
        let cleanStatus = row[0] ? row[0].toString().replace(/⚠️|✅|⏸️|❌|⚙️|🛑/g, '').trim() : '';

        const passouStatus = !statusFiltro || cleanStatus === statusFiltro;
        const passouSolicitante = !solicitantesFiltro.length || solicitantesFiltro.includes(row[3]);
        const passouBloco = !blocosFiltro.length || blocosFiltro.includes(row[4]);
        const passouMotivo = !motivoFiltro || row[10] === motivoFiltro;
        const dataEmissao = dataDeFiltro || dataAteFiltro ? obterDataEmissao(row) : '';
        const passouDataDe = !dataDeDigitada || (dataEmissao && dataEmissao >= dataDeFiltro);
        const passouDataAte = !dataAteDigitada || (dataEmissao && dataEmissao <= dataAteFiltro);
        return datasValidas && passouPesquisa && passouStatus && passouSolicitante && passouBloco && passouMotivo && passouDataDe && passouDataAte;
    });

    currentPage = 1;
    renderTableBody();
    updatePagination();
    atualizarDisponibilidadeRelatorio();
    
    atualizarDashboards(); 
}

function atualizarDisponibilidadeRelatorio() {
    const solicitanteSelecionado = obterValoresSelecionados(filterSolicitante).length > 0;
    const blocoSelecionado = obterValoresSelecionados(filterBloco).length > 0;
    const existemRegistros = filteredData.length > 0;

    btnGenerateReport.disabled = (!solicitanteSelecionado && !blocoSelecionado) || !existemRegistros;
    btnGenerateReport.title = solicitanteSelecionado
        ? (existemRegistros
            ? 'Gerar relatório em PDF para os solicitantes selecionados'
            : 'Não há registros para os filtros selecionados')
        : blocoSelecionado
            ? (existemRegistros
                ? 'Gerar relatório em PDF para todos os solicitantes dos blocos selecionados'
                : 'Não há registros para os filtros selecionados')
            : 'Selecione solicitantes ou blocos para gerar o relatório em PDF';
}

function gerarRelatorioSolicitante() {
    const solicitantes = obterValoresSelecionados(filterSolicitante);
    const blocos = obterValoresSelecionados(filterBloco);

    if (!solicitantes.length && !blocos.length) {
        alert('Selecione um solicitante ou bloco antes de gerar o relatório.');
        filterBloco.focus();
        return;
    }

    if (filteredData.length === 0) {
        alert('Não há registros para os filtros selecionados.');
        return;
    }

    if (!window.jspdf || typeof window.jspdf.jsPDF !== 'function') {
        alert('Não foi possível carregar o gerador de PDF. Atualize a página e tente novamente.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    if (typeof doc.autoTable !== 'function') {
        alert('Não foi possível carregar a tabela do relatório em PDF. Atualize a página e tente novamente.');
        return;
    }

    const nomeRelatorio = (solicitantes.length ? solicitantes.join('_') : `bloco_${blocos.join('_')}`).replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '');
    const destinatarioRelatorio = solicitantes.length
        ? solicitantes.join(', ')
        : `Todos os solicitantes dos blocos ${blocos.join(', ')}`;
    const totalPagesExp = '{total_pages_count_string}';

    // Contadores para o resumo do solicitante
    let resolvidas = 0;
    let pendentes = 0;
    filteredData.forEach(row => {
        let st = row[0] ? row[0].toString().toLowerCase() : '';
        if (st.includes('resolvido') || st.includes('concluido') || st.includes('concluído') || st.includes('aprovado')) {
            resolvidas++;
        } else {
            pendentes++;
        }
    });

    // Informações de emissão exibidas no cabeçalho da primeira página.
    doc.setFontSize(7.5);
    doc.setTextColor(110, 110, 110);
    const dataHoraEmissao = new Date().toLocaleString('pt-BR');
    doc.text(`Emissão: ${dataHoraEmissao}`, 283, 15, { align: 'right' });
    doc.text(`Total de Registros: ${filteredData.length}`, 283, 20.5, { align: 'right' });

    // 4. Cartão / Box com Dados do Solicitante e Filtros (Layout Bordô & Branco)
    doc.setFillColor(250, 246, 246);
    doc.setDrawColor(215, 200, 200);
    doc.setLineWidth(0.3);
    doc.roundedRect(14, 28, 269, 14, 1.5, 1.5, 'FD');

    // Linha interna decorativa bordô à esquerda do card
    doc.setFillColor(138, 21, 27);
    doc.roundedRect(14, 28, 2.5, 14, 1, 1, 'F');

    // Informações no Card
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(138, 21, 27);
    doc.text(solicitantes.length ? 'Solicitantes:' : 'Blocos:', 20, 35);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 30, 30);
    doc.text(destinatarioRelatorio, 38, 35);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text('Total Filtrado:', 118, 35);
    doc.setTextColor(13, 110, 253);
    doc.text(`${filteredData.length}`, 140, 35);

    doc.setTextColor(80, 80, 80);
    doc.text('O.S. Concluídas/Aprovadas:', 156, 35);
    doc.setTextColor(40, 167, 69);
    doc.text(`${resolvidas}`, 199, 35);

    doc.setTextColor(80, 80, 80);
    doc.text('O.S. Pendentes/Outras:', 233, 35);
    doc.setTextColor(220, 53, 69);
    doc.text(`${pendentes}`, 269, 35);

    const pctResolvidas = (resolvidas * 100 / filteredData.length).toFixed(1);
    doc.setFontSize(7.5);
    doc.setTextColor(80, 80, 80);
    doc.text(`Média de O.S. resolvidas: ${pctResolvidas}%`, 280, 39.5, { align: 'right' });

    // Sub-informações de filtros adicionais se ativos
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(110, 110, 110);
    const blocoF = blocos.length ? blocos.join(', ') : 'Todos';
    const statusF = filterStatus.value || 'Todos';
    doc.text(`Filtros adicionais: Bloco (${blocoF})  |  Status (${statusF})`, 20, 39.5);

    // 5. Tabela de Ordens de Serviço (Cores da Hemobrás)
    doc.autoTable({
        startY: 45,
        margin: { top: 45, bottom: 14, left: 14, right: 14 },
        head: [COLUNAS_DESEJADAS],
        body: filteredData.map(row => COLUNAS_DESEJADAS.map((_, i) => {
            let val = row[i] !== undefined && row[i] !== null ? row[i].toString() : '-';
            if (i === 0) {
                return val.replace(/⚠️|✅|⏸️|❌|⚙️|🛑/g, '').trim() || '-';
            }
            return val.trim() || '-';
        })),
        theme: 'grid',
        headStyles: {
            fillColor: [138, 21, 27], // Bordô Hemobrás
            textColor: [255, 255, 255], // Branco
            fontStyle: 'bold',
            fontSize: 7,
            halign: 'center',
            valign: 'middle',
            cellPadding: 2,
            minCellHeight: 8
        },
        alternateRowStyles: {
            fillColor: [253, 248, 248] // Fundo suave bordô/branco alternado
        },
        styles: {
            font: 'helvetica',
            fontSize: 6.5,
            cellPadding: 1.8,
            textColor: [40, 40, 40],
            lineColor: [225, 215, 215],
            lineWidth: 0.1,
            valign: 'middle',
            overflow: 'linebreak'
        },
        columnStyles: {
            0: { cellWidth: 18, halign: 'center' }, // Status
            1: { cellWidth: 20, halign: 'center' }, // Emissão
            2: { cellWidth: 22, halign: 'center', fontStyle: 'bold' }, // Nº OSMC
            3: { cellWidth: 24 }, // Solicitante
            4: { cellWidth: 14, halign: 'center' }, // Bloco
            5: { cellWidth: 12, halign: 'center' }, // Piso
            6: { cellWidth: 22 }, // Equipamento
            7: { cellWidth: 14, halign: 'center' }, // Sala
            8: { cellWidth: 40 }, // Descrição
            9: { cellWidth: 30 }, // Observação
            10: { cellWidth: 20 }, // Motivo
            11: { cellWidth: 20, halign: 'center' } // Fechamento
        },
        didParseCell: function(data) {
            // Estilização dos status na tabela
            if (data.section === 'body' && data.column.index === 0) {
                const st = getStatusStyle(data.cell.raw);
                data.cell.styles.textColor = st.rgbText;
                data.cell.styles.fillColor = st.rgbBg;
                data.cell.styles.fontStyle = 'bold';
            }
        },
        didDrawPage: function(data) {
            const pageSize = doc.internal.pageSize;
            const pageHeight = pageSize.height || pageSize.getHeight();
            const pageWidth = pageSize.width || pageSize.getWidth();

            // Identificação institucional repetida em todas as páginas do relatório.
            doc.setFillColor(138, 21, 27);
            doc.rect(0, 0, pageWidth, 5, 'F');

            try {
                doc.addImage(LOGO_HEMOBRAS_BASE64, 'JPEG', 14, 8, 18, 18);
            } catch (e) {
                console.warn('Não foi possível renderizar a logo no PDF:', e);
            }

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(138, 21, 27);
            doc.text('HEMOBRÁS - CONSULTA OSMC', 36, 15);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(90, 90, 90);
            doc.text('Empresa Brasileira de Hemoderivados e Biotecnologia  |  Relatório de Manutenção Corretiva', 36, 20.5);

            // Linha divisória do rodapé
            doc.setDrawColor(210, 210, 210);
            doc.setLineWidth(0.3);
            doc.line(14, pageHeight - 9, pageWidth - 14, pageHeight - 9);

            // Textos do rodapé
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7);
            doc.setTextColor(120, 120, 120);
            doc.text('Hemobrás - Empresa Brasileira de Hemoderivados e Biotecnologia', 14, pageHeight - 5);
            doc.text(solicitante ? `Solicitante: ${solicitante}` : `Bloco: ${bloco}`, pageWidth / 2, pageHeight - 5, { align: 'center' });
            doc.text(`Página ${data.pageNumber} de ${totalPagesExp}`, pageWidth - 14, pageHeight - 5, { align: 'right' });
        }
    });

    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save(`relatorio_osmc_${nomeRelatorio || 'bloco'}.pdf`);
}

function getTopNData(dataArray, colIndex, topN) {
    const counts = {};
    dataArray.forEach(row => {
        let val = row[colIndex] ? row[colIndex].toString().trim() : '';
        if (val && val !== '-' && val.toLowerCase() !== 'n/a') {
            counts[val] = (counts[val] || 0) + 1;
        }
    });

    const sorted = Object.keys(counts)
        .map(key => ({ label: key, count: counts[key] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);

    return {
        labels: sorted.map(item => item.label),
        data: sorted.map(item => item.count)
    };
}

// Cores por status: pendente vermelho, resolvido verde, execução amarelo, cancelado preto/amarelo, parado cinza
function getStatusStyle(label) {
    const v = (label || '').toString().toLowerCase();
    if (v.includes('resolvido') || v.includes('conclu') || v.includes('aprovado')) {
        return { bg: '#28a745', text: '#ffffff', border: '#28a745', borderWidth: 1, rgbBg: [40, 167, 69], rgbText: [255, 255, 255] };
    }
    if (v.includes('cancelado')) {
        return { bg: '#000000', text: '#ffc107', border: '#ffc107', borderWidth: 3, rgbBg: [0, 0, 0], rgbText: [255, 193, 7] };
    }
    if (v.includes('execu')) {
        return { bg: '#ffc107', text: '#212529', border: '#ffc107', borderWidth: 1, rgbBg: [255, 193, 7], rgbText: [33, 37, 41] };
    }
    if (v.includes('parado')) {
        return { bg: '#6c757d', text: '#ffffff', border: '#6c757d', borderWidth: 1, rgbBg: [108, 117, 125], rgbText: [255, 255, 255] };
    }
    if (v.includes('pendente') || v.includes('aguardando')) {
        return { bg: '#dc3545', text: '#ffffff', border: '#dc3545', borderWidth: 1, rgbBg: [220, 53, 69], rgbText: [255, 255, 255] };
    }
    return { bg: '#adb5bd', text: '#212529', border: '#adb5bd', borderWidth: 1, rgbBg: [173, 181, 189], rgbText: [33, 37, 41] };
}

function atualizarDashboards() {
    const contagemStatus = {};
    let resolvidas = 0;
    let pendentes = 0;

    filteredData.forEach(row => {
        let status = row[0] ? row[0].toString().replace(/⚠️|✅|⏸️|❌|⚙️|🛑/g, '').trim() : '';
        if (status && status !== '-') {
            contagemStatus[status] = (contagemStatus[status] || 0) + 1;
            
            let statusMin = status.toLowerCase();
            if (statusMin.includes('aprovado') || statusMin.includes('concluído') || statusMin.includes('concluido') || statusMin.includes('resolvido')) {
                resolvidas++;
            } else {
                pendentes++;
            }
        }
    });

    kpiCardsContainer.innerHTML = `
        <div class="kpi-card" style="border-left-color: #0d6efd;">
            <h3>Total Filtrado</h3>
            <p style="color: #0d6efd">${filteredData.length}</p>
        </div>
        <div class="kpi-card" style="border-left-color: #155724;">
            <h3>O.S Resolvidas</h3>
            <p style="color: #155724">${resolvidas}</p>
        </div>
        <div class="kpi-card" style="border-left-color: #dc3545;">
            <h3>O.S Pendentes / Outros</h3>
            <p style="color: #dc3545">${pendentes}</p>
        </div>
    `;

    const pieDataLabels = {
        color: '#444444',
        anchor: 'end',
        align: 'end',
        offset: 4,
        font: { weight: 'bold', size: 11, family: "'Inter', sans-serif" },
        formatter: (value, context) => {
            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.forEach(data => { sum += data; });
            return value > 0 ? (value * 100 / sum).toFixed(0) + "%" : null;
        }
    };

    const coresBase = ['#155724', '#004085', '#d39e00', '#6c757d', '#dc3545', '#17a2b8', '#343a40', '#28a745'];

    // GRÁFICO 1: Status
    const statusLabels = Object.keys(contagemStatus);
    const statusData = Object.values(contagemStatus);
    const ctxStatus = document.getElementById('osmcChart').getContext('2d');
    
    const solicitantesSelecionados = obterValoresSelecionados(filterSolicitante);
    const nomeSolicitante = solicitantesSelecionados.join(', ');
    document.getElementById('statusChartTitle').textContent =
        'Distribuição por Status' + (nomeSolicitante ? ` - ${nomeSolicitante}` : '');

    if (osmcChartInstance) osmcChartInstance.destroy();
    osmcChartInstance = new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
            labels: statusLabels,
            datasets: [{
                data: statusData,
                backgroundColor: statusLabels.map(l => getStatusStyle(l).bg),
                borderColor: statusLabels.map(l => getStatusStyle(l).border),
                borderWidth: statusLabels.map(l => getStatusStyle(l).borderWidth)
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, layout: { padding: 25 }, plugins: { legend: { position: 'right', labels: { boxWidth: 10, font: {size: 10} } }, datalabels: pieDataLabels } }
    });

    // GRÁFICO 2: Top 5 Blocos (Agora no índice 4)
    const ctxBloco = document.getElementById('blocoChart').getContext('2d');
    const blocoTitle = document.getElementById('blocoChartTitle');
    const porSolicitante = solicitantesSelecionados.length > 0;
    let blocoLabels, blocoData, blocoOptions;

    if (porSolicitante) {
        // Percentual de O.S. resolvidas por bloco do solicitante
        const porBloco = {};
        filteredData.forEach(row => {
            const bloco = row[4] ? row[4].toString().trim() : '';
            if (!bloco || bloco === '-') return;
            const st = (row[0] || '').toString().toLowerCase();
            const ok = st.includes('aprovado') || st.includes('concluído') || st.includes('concluido') || st.includes('resolvido');
            porBloco[bloco] = porBloco[bloco] || { total: 0, ok: 0 };
            porBloco[bloco].total++;
            if (ok) porBloco[bloco].ok++;
        });
        const lista = Object.keys(porBloco)
            .map(b => ({ b, total: porBloco[b].total, pct: porBloco[b].ok * 100 / porBloco[b].total }))
            .sort((a, c) => c.total - a.total)
            .slice(0, 5);
        blocoLabels = lista.map(i => i.b);
        blocoData = lista.map(i => Number(i.pct.toFixed(1)));
        blocoTitle.textContent = (lista.length > 1
            ? '% de O.S. Resolvidas por Bloco'
            : 'Média de O.S. Resolvidas (%)') + ` - ${nomeSolicitante}`;
        blocoOptions = {
            plugins: { datalabels: { formatter: v => v + '%' } },
            scales: { y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } } }
        };
    } else {
        const blocoStats = getTopNData(filteredData, 4, 5);
        blocoLabels = blocoStats.labels;
        blocoData = blocoStats.data;
        blocoTitle.textContent = 'Top 5 Blocos (Volume de OSMC)';
        blocoOptions = { plugins: {}, scales: { y: { beginAtZero: true } } };
    }

    if (blocoChartInstance) blocoChartInstance.destroy();
    blocoChartInstance = new Chart(ctxBloco, {
        type: 'bar',
        data: { labels: blocoLabels, datasets: [{ label: porSolicitante ? '% Resolvidas' : 'Qtd de OSMC', data: blocoData, backgroundColor: porSolicitante ? '#155724' : '#004085' }] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 25 } },
            plugins: {
                legend: { display: false },
                datalabels: Object.assign({ color: '#444', anchor: 'end', align: 'end', offset: 4, font: { weight: 'bold', size: 11 } }, blocoOptions.plugins.datalabels)
            },
            scales: blocoOptions.scales
        }
    });

}

function renderTableHeaders() {
    tableHead.innerHTML = '';
    const tr = document.createElement('tr');
    COLUNAS_DESEJADAS.forEach(colName => {
        const th = document.createElement('th');
        th.textContent = colName;
        tr.appendChild(th);
    });
    tableHead.appendChild(tr);
}

function renderTableBody() {
    tableBody.innerHTML = '';
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    paginatedItems.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach((cellValue, i) => {
            const td = document.createElement('td');
            let val = cellValue ? cellValue.toString().trim() : '-';

            if (i === 0) {
                let cleanVal = val.replace(/⚠️|✅|⏸️|❌|⚙️|🛑/g, '').trim();
                let valMin = cleanVal.toLowerCase();

                const emoji = valMin.includes('resolvido') || valMin.includes('concluído') || valMin.includes('concluido') || valMin.includes('aprovado') ? '✅'
                    : valMin.includes('pendente') || valMin.includes('aguardando') ? '⚠️'
                    : valMin.includes('parado') ? '⏸️'
                    : valMin.includes('cancelado') ? '❌'
                    : valMin.includes('execução') || valMin.includes('execucao') ? '⚙️' : '📋';
                const st = getStatusStyle(cleanVal);
                td.innerHTML = `<span style="background-color: ${st.bg}; color: ${st.text}; padding: 4px 10px; border-radius: 12px; font-weight: 600; font-size: 12px;">${emoji} ${cleanVal}</span>`;
            } else {
                td.textContent = val;
            }
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    currentPageIndicator.textContent = currentPage;
    pageInfo.textContent = `Mostrando ${filteredData.length} registros (Página ${currentPage} de ${totalPages || 1})`;
    btnPrev.disabled = currentPage === 1;
    btnNext.disabled = currentPage === totalPages || totalPages === 0;
}

function changePage(delta) {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const newPage = currentPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderTableBody();
        updatePagination();
    }
}

function jumpToPage() {
    const page = parseInt(jumpInput.value);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTableBody();
        updatePagination();
        jumpInput.value = ''; 
    } else {
        alert(`Por favor, digite uma página válida entre 1 e ${totalPages}`);
    }
}

btnPrev.addEventListener('click', () => changePage(-1));
btnNext.addEventListener('click', () => changePage(1));
btnJump.addEventListener('click', jumpToPage);
jumpInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') jumpToPage(); });

searchInput.addEventListener('input', aplicarFiltrosGerais);
filterStatus.addEventListener('change', aplicarFiltrosGerais);
filterSolicitante.addEventListener('change', () => {
    aplicarFiltrosGerais();
});
filterBloco.addEventListener('change', () => {
    aplicarFiltrosGerais();
});
filterMotivo.addEventListener('change', aplicarFiltrosGerais);
filterDateFrom.addEventListener('input', () => {
    atualizarFiltrosBlocoESolicitantePorData();
    aplicarFiltrosGerais();
});
filterDateUntil.addEventListener('input', () => {
    atualizarFiltrosBlocoESolicitantePorData();
    aplicarFiltrosGerais();
});

configurarFiltroMultiplo(filterSolicitante);
configurarFiltroMultiplo(filterBloco);

document.addEventListener('DOMContentLoaded', init);