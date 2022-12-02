<?php

namespace App\Concerns;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait HasProfileCover
{
    /**
     * Update the user's profile photo.
     *
     * @param  \Illuminate\Http\UploadedFile  $photo
     * @return void
     */
    public function updateProfileCover(UploadedFile $photo)
    {
        tap($this->cover, function ($previous) use ($photo) {
            $this->deleteProfileCover();
            $this->forceFill([
                'cover' => $photo->storePublicly(
                    'profile-covers', ['disk' => $this->profileCoverDisk()]
                ),
            ])->save();
            if ($previous) {
                Storage::disk($this->profileCoverDisk())->delete($previous);
            }
        });
    }

    /**
     * Delete the user's profile photo.
     *
     * @return void
     */
    public function deleteProfileCover()
    {

        if (is_null($this->cover)) {
            return;
        }

        Storage::disk($this->profileCoverDisk())->delete($this->cover);
        $this->forceFill([
            'cover' => null,
        ])->save();
    }

    /**
     * Get the URL to the user's profile photo.
     *
     * @return string
     */
    public function getProfileCoverUrlAttribute()
    {
        return $this->cover
                    ? Storage::disk($this->profileCoverDisk())->url($this->cover)
                    : $this->defaultProfileCoverUrl();
    }

    /**
     * Get the default profile photo URL if no profile photo has been uploaded.
     *
     * @return string
     */
    protected function defaultProfileCoverUrl()
    {
        $name = trim(collect(explode(' ', $this->name))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));

        return 'https://ui-avatars.com/api/?name='.urlencode($name).'&color=7F9CF5&background=EBF4FF';
    }

    /**
     * Get the disk that profile photos should be stored on.
     *
     * @return string
     */
    protected function profileCoverDisk()
    {
        return isset($_ENV['VAPOR_ARTIFACT_NAME']) ? 's3' : config('jetstream.profile_photo_disk', 'public');
    }
}
