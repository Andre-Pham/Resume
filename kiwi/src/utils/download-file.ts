interface DownloadFileParams {
  fileName: string
  downloadName: string
}

/**
 * Downloads a public asset via file name.
 */
export function downloadFile(params: DownloadFileParams) {
  const { fileName, downloadName } = params
  const link = document.createElement("a")
  link.href = `${import.meta.env.BASE_URL}downloads/${fileName}`
  link.download = downloadName
  document.body.appendChild(link)
  try {
    link.click()
  } finally {
    link.remove()
  }
}
