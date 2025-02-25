"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import type { Gateway } from "@/types/gateway"

interface AddGatewayFormProps {
  onSubmit: (gateway: Omit<Gateway, "id"> & { imageFile?: File }) => void
  onCancel: () => void
}

export function AddGatewayForm({ onSubmit, onCancel }: AddGatewayFormProps) {
  const [formData, setFormData] = useState<Omit<Gateway, "id">>({
    imageUrl: "",
    gatewayName: "",
    hostName: "",
    status: "disconnected",
    modelName: "",
    firmwareVersion: "",
    thingsProVersion: "",
    uplink: "",
    ipAddress: "",
  })

  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)

      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)

      setFormData((prev) => ({ ...prev, imageUrl: file.name }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    let submissionData = { ...formData }

    if (selectedImage) {
      submissionData = {
        ...submissionData,
        imageFile: selectedImage,
      }
    }

    onSubmit(submissionData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="imageUpload">Gateway Image</Label>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32 relative">
            <Image
              src={previewUrl || formData.imageUrl || "/placeholder.svg"}
              alt="image"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div>
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileInputRef}
            />
            <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
              Choose Image
            </Button>
            {selectedImage && <p className="mt-2 text-sm text-gray-500">{selectedImage.name}</p>}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="gatewayName">Gateway Name</Label>
        <Input id="gatewayName" name="gatewayName" value={formData.gatewayName} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hostName">Host Name</Label>
        <Input id="hostName" name="hostName" value={formData.hostName} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={handleSelectChange("status")}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="connected">Connected</SelectItem>
            <SelectItem value="disconnected">Disconnected</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="modelName">Model Name</Label>
        <Input id="modelName" name="modelName" value={formData.modelName} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="firmwareVersion">Firmware Version</Label>
        <Input
          id="firmwareVersion"
          name="firmwareVersion"
          value={formData.firmwareVersion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="thingsProVersion">ThingsPro Version</Label>
        <Input
          id="thingsProVersion"
          name="thingsProVersion"
          value={formData.thingsProVersion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="uplink">Uplink</Label>
        <Input id="uplink" name="uplink" value={formData.uplink} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ipAddress">IP Address</Label>
        <Input id="ipAddress" name="ipAddress" value={formData.ipAddress} onChange={handleChange} required />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Gateway</Button>
      </div>
    </form>
  )
}

